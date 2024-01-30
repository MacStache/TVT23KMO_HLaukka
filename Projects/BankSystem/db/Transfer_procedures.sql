-- poistetaan vanha proseduuri jos sellainen on
DROP PROCEDURE IF EXISTS checking_transfer;
-- Tiliisirto proseduuri
DELIMITER //
CREATE PROCEDURE checking_transfer(IN first_id INT, IN second_id INT, IN amount DECIMAL(10,2))
BEGIN
    DECLARE amount1, amount2 INT DEFAULT 0;
    DECLARE balance_first DECIMAL(10,2);
    DECLARE balance_second DECIMAL(10,2);
    DECLARE card_id_first INT;
	DECLARE card_id_second INT;
-- haetaan molempien tilien kortin id ja tilin balanssi ja asetetaan ne omiin muuttujiinsa.
    SELECT card_id INTO card_id_first FROM checking_account WHERE id = first_id LIMIT 1;
    SELECT card_id INTO card_id_second FROM checking_account WHERE id = second_id LIMIT 1;
    SELECT balance INTO balance_first FROM checking_account WHERE id = first_id LIMIT 1;
    SELECT balance INTO balance_second FROM checking_account WHERE id = second_id LIMIT 1;
-- jos tilillä on saldoa niin aloitetaan siirto
    IF (balance_first >= amount) THEN
        START TRANSACTION;

        -- nosto lähtötililtä
        UPDATE checking_account SET balance = balance_first - amount WHERE id = first_id;
        SET amount1 = ROW_COUNT();
        -- pano kohdetilille
        UPDATE checking_account SET balance = balance_second + amount WHERE id = second_id;
        SET amount2 = ROW_COUNT();
		-- Jos siirto onnistui niin kommitoidaan
        IF (amount1 > 0 AND amount2 > 0) THEN
            COMMIT;

            -- Tallennetaan nosto transaction tauluun
            INSERT INTO transaction(account_id, transaction_type_code, balance, date)
            VALUES (first_id, 'W', balance_first - amount, NOW());
            -- Tallennetaan siirto transfer tauluun
            INSERT INTO transfer(card_id, account_id, amount, transaction_type_code, date)
            VALUES (card_id_first, first_id, -amount, 'W', NOW());

            -- Tallennetaan pano transaction tauluun
            INSERT INTO transaction(account_id, transaction_type_code, balance, date)
            VALUES (second_id, 'D', balance_second + amount, NOW());
            -- Tallennetaan pano transfer tauluun
            INSERT INTO transfer(card_id, account_id, amount, transaction_type_code, date)
            VALUES (card_id_second, second_id, +amount, 'D', NOW());
        ELSE
            ROLLBACK;
        END IF;
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Siirto ei onnistu: Tilillä ei ole katetta.';
    END IF;
END //
DELIMITER ;



-- poistetaan vanha proseduuri jos sellainen on
DROP PROCEDURE IF EXISTS credit_transfer;
-- Tiliisirto proseduuri
DELIMITER //
CREATE PROCEDURE credit_transfer(IN first_id INT, IN second_id INT, IN amount DECIMAL(10,2))
BEGIN
    DECLARE amount1, amount2 INT DEFAULT 0;
    DECLARE balance_first DECIMAL(10,2);
    DECLARE balance_second DECIMAL(10,2);
    DECLARE card_id_first INT;
    DECLARE card_id_second INT;

    -- haetaan molempien tilien kortin id ja tilin balanssi ja asetetaan ne omiin muuttujiinsa.
    SELECT card_id INTO card_id_first FROM credit_account WHERE id = first_id LIMIT 1;
    SELECT card_id INTO card_id_second FROM checking_account WHERE id = second_id LIMIT 1;
    SELECT balance INTO balance_first FROM credit_account WHERE id = first_id LIMIT 1;
    SELECT balance INTO balance_second FROM checking_account WHERE id = second_id LIMIT 1;

    -- jos tilillä on saldoa niin aloitetaan siirto
    IF (balance_first >= amount) THEN
        START TRANSACTION;

        -- nosto lähtötililtä
        UPDATE credit_account SET balance = balance_first - amount, credit_balance = credit_balance + amount WHERE id = first_id;
        SET amount1 = ROW_COUNT();
        -- pano kohdetilille
        UPDATE checking_account SET balance = balance_second + amount WHERE id = second_id;
        SET amount2 = ROW_COUNT();

        -- Jos siirto onnistui niin kommitoidaan
        IF (amount1 > 0 AND amount2 > 0) THEN
            COMMIT;

            -- Tallennetaan nosto transaction tauluun
            INSERT INTO transaction(account_id, transaction_type_code, balance, date)
            VALUES (first_id, 'W', balance_first - amount, NOW());
            -- Tallennetaan siirto transfer tauluun
            INSERT INTO transfer(card_id, account_id, amount, transaction_type_code, date)
            VALUES (card_id_first, first_id, -amount, 'W', NOW());

            -- Tallennetaan pano transaction tauluun
            INSERT INTO transaction(account_id, transaction_type_code, balance, date)
            VALUES (second_id, 'D', balance_second + amount, NOW());
            -- Tallennetaan pano transfer tauluun
            INSERT INTO transfer(card_id, account_id, amount, transaction_type_code, date)
            VALUES (card_id_second, second_id, amount, 'D', NOW());
        ELSE
            ROLLBACK;
        END IF;
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Siirto ei onnistu: Tilillä ei ole katetta.';
    END IF;
END //
DELIMITER ;



-- poistetaan vanha proseduuri jos sellainen on
DROP PROCEDURE IF EXISTS to_credit_transfer;
-- Tiliisirto proseduuri
DELIMITER //
CREATE PROCEDURE to_credit_transfer(IN first_id INT, IN second_id INT, IN amount DECIMAL(10,2))
BEGIN
    DECLARE amount1, amount2 INT DEFAULT 0;
    DECLARE balance_first DECIMAL(10,2);
    DECLARE balance_second DECIMAL(10,2);
    DECLARE card_id_first INT;
    DECLARE card_id_second INT;

    -- haetaan molempien tilien kortin id ja tilin balanssi ja asetetaan ne omiin muuttujiinsa.
    SELECT card_id INTO card_id_first FROM checking_account WHERE id = first_id LIMIT 1;
    SELECT card_id INTO card_id_second FROM credit_account WHERE id = second_id LIMIT 1;
    SELECT balance INTO balance_first FROM checking_account WHERE id = first_id LIMIT 1;
    SELECT balance INTO balance_second FROM credit_account WHERE id = second_id LIMIT 1;

    -- jos tilillä on saldoa niin aloitetaan siirto
    IF (balance_first >= amount) THEN
        START TRANSACTION;

        -- nosto lähtötililtä
        UPDATE credit_account SET balance = balance_first + amount, credit_balance = credit_balance - amount WHERE id = first_id;
        SET amount1 = ROW_COUNT();
        -- pano kohdetilille
        UPDATE checking_account SET balance = balance_second - amount WHERE id = second_id;
        SET amount2 = ROW_COUNT();

        -- Jos siirto onnistui niin kommitoidaan
        IF (amount1 > 0 AND amount2 > 0) THEN
            COMMIT;

            -- Tallennetaan nosto transaction tauluun
            INSERT INTO transaction(account_id, transaction_type_code, balance, date)
            VALUES (first_id, 'W', balance_first - amount, NOW());
            -- Tallennetaan siirto transfer tauluun
            INSERT INTO transfer(card_id, account_id, amount, transaction_type_code, date)
            VALUES (card_id_first, first_id, -amount, 'W', NOW());

            -- Tallennetaan pano transaction tauluun
            INSERT INTO transaction(account_id, transaction_type_code, balance, date)
            VALUES (second_id, 'D', balance_second + amount, NOW());
            -- Tallennetaan pano transfer tauluun
            INSERT INTO transfer(card_id, account_id, amount, transaction_type_code, date)
            VALUES (card_id_second, second_id, amount, 'D', NOW());
        ELSE
            ROLLBACK;
        END IF;
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Siirto ei onnistu: Tilillä ei ole katetta.';
    END IF;
END //
DELIMITER ;



-- poistetaan vanha proseduuri jos sellainen on
DROP PROCEDURE IF EXISTS to_savings_transfer;
-- Tiliisirto proseduuri
DELIMITER //
CREATE PROCEDURE to_savings_transfer(IN first_id INT, IN second_id INT, IN amount DECIMAL(10,2))
BEGIN
    DECLARE amount1, amount2 INT DEFAULT 0;
    DECLARE balance_first DECIMAL(10,2);
    DECLARE balance_second DECIMAL(10,2);
    DECLARE card_id_first INT;
    DECLARE card_id_second INT;

    -- haetaan molempien tilien kortin id ja tilin balanssi ja asetetaan ne omiin muuttujiinsa.
    SELECT card_id INTO card_id_first FROM checking_account WHERE id = first_id LIMIT 1;
    SELECT card_id INTO card_id_second FROM savings_account WHERE id = second_id LIMIT 1;
    SELECT balance INTO balance_first FROM checking_account WHERE id = first_id LIMIT 1;
    SELECT balance INTO balance_second FROM savings_account WHERE id = second_id LIMIT 1;

    -- jos tilillä on saldoa niin aloitetaan siirto
    IF (balance_first >= amount) THEN
        START TRANSACTION;

        -- nosto lähtötililtä
        UPDATE checking_account SET balance = balance_first - amount WHERE id = first_id;
        SET amount1 = ROW_COUNT();
        -- pano kohdetilille
        UPDATE savings_account SET balance = balance_second + amount WHERE id = second_id;
        SET amount2 = ROW_COUNT();

        -- Jos siirto onnistui niin kommitoidaan
        IF (amount1 > 0 AND amount2 > 0) THEN
            COMMIT;

            -- Tallennetaan nosto transaction tauluun
            INSERT INTO transaction(account_id, transaction_type_code, balance, date)
            VALUES (first_id, 'W', balance_first - amount, NOW());
            -- Tallennetaan siirto transfer tauluun
            INSERT INTO transfer(card_id, account_id, amount, transaction_type_code, date)
            VALUES (card_id_first, first_id, -amount, 'W', NOW());

            -- Tallennetaan pano transaction tauluun
            INSERT INTO transaction(account_id, transaction_type_code, balance, date)
            VALUES (second_id, 'D', balance_second + amount, NOW());
            -- Tallennetaan pano transfer tauluun
            INSERT INTO transfer(card_id, account_id, amount, transaction_type_code, date)
            VALUES (card_id_second, second_id, amount, 'D', NOW());
        ELSE
            ROLLBACK;
        END IF;
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Siirto ei onnistu: Tilillä ei ole katetta.';
    END IF;
END //
DELIMITER ;


-- poistetaan vanha proseduuri jos sellainen on
DROP PROCEDURE IF EXISTS from_savings_transfer;
-- Tiliisirto proseduuri
DELIMITER //
CREATE PROCEDURE from_savings_transfer(IN first_id INT, IN second_id INT, IN amount DECIMAL(10,2))
BEGIN
    DECLARE amount1, amount2 INT DEFAULT 0;
    DECLARE balance_first DECIMAL(10,2);
    DECLARE balance_second DECIMAL(10,2);
    DECLARE card_id_first INT;
    DECLARE card_id_second INT;

    -- haetaan molempien tilien kortin id ja tilin balanssi ja asetetaan ne omiin muuttujiinsa.
    SELECT card_id INTO card_id_first FROM savings_account WHERE id = first_id LIMIT 1;
    SELECT card_id INTO card_id_second FROM checking_account WHERE id = second_id LIMIT 1;
    SELECT balance INTO balance_first FROM savings_account WHERE id = first_id LIMIT 1;
    SELECT balance INTO balance_second FROM checking_account WHERE id = second_id LIMIT 1;

    -- jos tilillä on saldoa niin aloitetaan siirto
    IF (balance_first >= amount) THEN
        START TRANSACTION;

        -- nosto lähtötililtä
        UPDATE savings_account SET balance = balance_first - amount WHERE id = first_id;
        SET amount1 = ROW_COUNT();
        -- pano kohdetilille
        UPDATE checking_account SET balance = balance_second + amount WHERE id = second_id;
        SET amount2 = ROW_COUNT();

        -- Jos siirto onnistui niin kommitoidaan
        IF (amount1 > 0 AND amount2 > 0) THEN
            COMMIT;

            -- Tallennetaan nosto transaction tauluun
            INSERT INTO transaction(account_id, transaction_type_code, balance, date)
            VALUES (first_id, 'W', balance_first - amount, NOW());
            -- Tallennetaan siirto transfer tauluun
            INSERT INTO transfer(card_id, account_id, amount, transaction_type_code, date)
            VALUES (card_id_first, first_id, -amount, 'W', NOW());

            -- Tallennetaan pano transaction tauluun
            INSERT INTO transaction(account_id, transaction_type_code, balance, date)
            VALUES (second_id, 'D', balance_second + amount, NOW());
            -- Tallennetaan pano transfer tauluun
            INSERT INTO transfer(card_id, account_id, amount, transaction_type_code, date)
            VALUES (card_id_second, second_id, amount, 'D', NOW());
        ELSE
            ROLLBACK;
        END IF;
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Siirto ei onnistu: Tilillä ei ole katetta.';
    END IF;
END //
DELIMITER ;

-- näillä voi testata toiminnallisuutta. sulkujen sisällä olevat arvot ovat lähtötili(first_id), kohdetili(second_id) ja summa(amount)
CALL checking_transfer(6,1,200);
SELECT * FROM checking_account;
SELECT * FROM transaction;
SELECT * FROM transfer;

CALL credit_transfer(1,2,2000);
SELECT * FROM credit_account;
SELECT * FROM checking_account;
SELECT * FROM transaction;
SELECT * FROM transfer;

CALL to_credit_transfer(2,1,100);
SELECT * FROM checking_account;
SELECT * FROM credit_account;
SELECT * FROM transaction;
SELECT * FROM transfer;

CALL to_savings_transfer(2,1,100);
SELECT * FROM savings_account;
SELECT * FROM checking_account;
SELECT * FROM transaction;
SELECT * FROM transfer;

CALL from_savings_transfer(4,1,100);
SELECT * FROM savings_account;
SELECT * FROM checking_account;
SELECT * FROM transaction;
SELECT * FROM transfer;