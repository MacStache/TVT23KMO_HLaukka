-- poistetaan vanha proseduuri jos sellainen on
DROP PROCEDURE IF EXISTS checking_withdraw;

-- käyttötilin nostoproseduuri
DELIMITER //
CREATE PROCEDURE checking_withdraw(IN account_id INT, IN amount DECIMAL(10,2), IN card_id INT)
BEGIN
    DECLARE amount1 DECIMAL(10,2) DEFAULT 0;
    DECLARE balance1 DECIMAL(10,2);

    SELECT balance INTO balance1 FROM checking_account WHERE id = account_id LIMIT 1;

    IF (balance1 >= amount) THEN
        START TRANSACTION;
        UPDATE checking_account SET balance = balance - amount WHERE id = account_id;
        SET amount1 = ROW_COUNT();

        IF (amount1 > 0) THEN
            COMMIT;
            INSERT INTO transaction(account_id, transaction_type_code, balance, date)
            VALUES (account_id, 'W', balance1 - amount, NOW());
            INSERT INTO transfer(card_id, account_id, amount, transaction_type_code, date)
            VALUES (card_id, account_id, -amount, 'W', NOW());
        ELSE
            ROLLBACK;
        END IF;
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Nosto ei onnistu: Tilillä ei ole katetta.';
    END IF;
END //
DELIMITER ;


-- poistetaan vanha proseduuri jos sellainen on
DROP PROCEDURE IF EXISTS credit_withdraw;
-- luottotilin nostoproseduuri
DELIMITER //
CREATE PROCEDURE credit_withdraw(IN account_id INT, IN amount DECIMAL(10,2), IN card_id INT)
BEGIN
    DECLARE amount1 DECIMAL(10,2) DEFAULT 0;
    DECLARE balance1 DECIMAL(10,2);

    SELECT balance INTO balance1 FROM credit_account WHERE id = account_id LIMIT 1;

    IF (balance1 >= amount) THEN
        START TRANSACTION;
        UPDATE credit_account SET balance = balance - amount WHERE id = account_id;
        UPDATE credit_account SET credit_balance = credit_balance + amount WHERE id = account_id;
        SET amount1 = ROW_COUNT();

        IF (amount1 > 0) THEN
            COMMIT;
            INSERT INTO transaction(account_id, transaction_type_code, balance, date)
            VALUES (account_id, 'W', balance1 - amount, NOW());
            INSERT INTO transfer(card_id, account_id, amount, transaction_type_code, date)
            VALUES (card_id, account_id, -amount, 'W', NOW());
        ELSE
            ROLLBACK;
        END IF;
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Nosto ei onnistu: Tilillä ei ole katetta.';
    END IF;
END //
DELIMITER ;

-- näillä voi testata proseduuria Sulkuihin parametriksi (account_id, amount, card_id)
CALL checking_withdraw(1,100,1);
select * from checking_account;

CALL credit_withdraw(1,100,2)
select * from credit_account;