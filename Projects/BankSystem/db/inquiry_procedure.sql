-- poistetaan vanha proseduuri jos sellainen on
DROP PROCEDURE IF EXISTS get_inquiries;

-- saldokysely proseduuri
DELIMITER //
CREATE PROCEDURE get_inquiries(IN card_id_param INT)
BEGIN
	-- asetetaan muuttujat joita tarvitaan tietojen noutoon
    DECLARE amount_val DECIMAL(10, 2);
    DECLARE transaction_type_code_val CHAR(1);
    DECLARE balance_val DECIMAL(10, 2);
    DECLARE credit_balance_val DECIMAL(10, 2);
    DECLARE account_type_val ENUM('savings_account', 'credit_account', 'checking_account');
    DECLARE account_id_val INT;
    DECLARE date_val DATETIME;

    -- Luodaan kursori, joka hakee tiedot transder taulusta. Tää on jännä! 
    -- Eli tämä varaa tietyt kentät, joista se käy sitten myöhemmin noutamassa tiedon
    DECLARE transfer_cursor CURSOR FOR
        SELECT amount, transaction_type_code, account_id, date
        FROM transfer
        WHERE card_id = card_id_param
        ORDER BY date DESC
        LIMIT 10;

    -- Jos tietoja ei löydy niin asetetaan amount arvoksi null
    DECLARE CONTINUE HANDLER FOR NOT FOUND
        SET amount_val = NULL;

    -- Tyhjennetään inquiry taulu truncate komennolla
    -- Tämä tehdään joka kerta kun proseduuria kutsutaan, eli meillä on aina 10 tuoreinta tietoa hallussa.
    TRUNCATE TABLE inquiry;

    -- Avataan aiemmin luotu kursori käyttöä varten ja laitetaan se kiertämään 10 loopin rallia
    OPEN transfer_cursor;
    transfer_loop: LOOP
		-- Tässä haetaan kursorille aiemmin asetetuista kentistä tiedot ja tallennetaan ne muuttujiin
        FETCH transfer_cursor INTO amount_val, transaction_type_code_val, account_id_val, date_val;
        IF amount_val IS NULL THEN
            LEAVE transfer_loop;
        END IF;

        -- Tarkistetaan, että minkälaiseen tiliin kortti on liitetty.
        SELECT type INTO account_type_val
        FROM account
        WHERE card_id = card_id_param;

        -- Tilin tyypin mukaisesti asetetaan balance ja credit_balance muuttujiin. 
        -- Tämä siksi, että osassa tilityypeistä ei ole credit_valueta niin ei saada NULL tietueita
        -- Verrataan balansseja myös päivämääriin niin saadaan ajantasaiset balancet jokaiselle tapahtumalle
        CASE account_type_val
            WHEN 'checking_account' THEN
                SELECT balance INTO balance_val
                FROM transaction
                WHERE account_id = account_id_val AND date <= date_val
                ORDER BY date DESC
                LIMIT 1;
                SET credit_balance_val = 0;
                
            WHEN 'credit_account' THEN
                SELECT credit_balance INTO credit_balance_val
                FROM credit_account
                WHERE id = account_id_val;

                SELECT balance INTO balance_val
                FROM transaction
                WHERE account_id = account_id_val AND date <= date_val
                ORDER BY date DESC
                LIMIT 1;

            WHEN 'savings_account' THEN
                SELECT balance INTO balance_val
                FROM transaction
                WHERE account_id = account_id_val AND date <= date_val
                ORDER BY date DESC
                LIMIT 1;
                SET credit_balance_val = 0;
                
            ELSE
                -- Jos on jostain syystä muita tilityyppejä (ei ole) niin laitetaan balanssit kuntoon
                SET balance_val = 0;
                SET credit_balance_val = 0;
        END CASE;

        -- Lisätään haetut inquirytauluun, tungetaan niihin sisältö muuttujista ja lähdetään himaan.
        INSERT INTO inquiry(card_id, amount, balance, credit_balance, transaction_type_code, date)
        VALUES (card_id_param, amount_val, balance_val, credit_balance_val, transaction_type_code_val, date_val);

    END LOOP;

    -- Suljetaan lopuksi transfer kursori
    CLOSE transfer_cursor;
END //
DELIMITER ;


-- Tällä voi testata proseduuria. Sulkuihin parametriksi (card_id)
call get_inquiries(4);
select * from inquiry ORDER BY date ASC;
