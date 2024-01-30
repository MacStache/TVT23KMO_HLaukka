-- poistetaan vanha proseduuri jos sellainen on
DROP PROCEDURE IF EXISTS add_card_and_type;
-- Kortinluonti proseduuri
DELIMITER //
CREATE PROCEDURE add_card_and_type(
-- Muuttujat. Osa otetaan sisään backendistä (user_id ja card_type), luodun kortin id viedään ulos
    IN p_user_id INT,
    IN p_card_type ENUM('debit_card', 'credit_card', 'combination_card'),
    OUT p_created_card_id INT
)
BEGIN
    DECLARE randomPIN INT;
    
    -- Luo random pin-koodi
    SET randomPIN = FLOOR(1000 + RAND() * 9000);

    -- lisätään kortti card -tauluun
    INSERT INTO card (user_id, pin, type, expire_date)
    VALUES (p_user_id, randomPIN, p_card_type, DATE_ADD(NOW(), INTERVAL 5 YEAR));

    -- tallennetaan luodun kortin id muuttujaan
    SET p_created_card_id = LAST_INSERT_ID();

    -- Lisätään kortti tyypin mukaiseen tauluun
    CASE p_card_type
        WHEN 'debit_card' THEN
            INSERT INTO debit_card (card_id, active, balance, withdraw_limit, type)
            VALUES (p_created_card_id, '1', '5000', '1000', p_card_type);
        WHEN 'credit_card' THEN
            INSERT INTO credit_card (card_id, active, credit_balance, credit_limit, type)
            VALUES (p_created_card_id, '1', '0', '2000', p_card_type);
        WHEN 'combination_card' THEN
            INSERT INTO combination_card (card_id, active, balance, withdraw_limit, credit_limit, credit_balance, type)
            VALUES (p_created_card_id, '1', '5000', '1000', '2000', '0', p_card_type);
    END CASE;

END //
DELIMITER ;
