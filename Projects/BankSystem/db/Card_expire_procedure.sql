DROP PROCEDURE IF EXISTS deactivate_old_cards;

-- Card expire procedure
DELIMITER //

CREATE PROCEDURE deactivate_old_cards()
BEGIN
	DECLARE done INT DEFAULT FALSE;
    -- Initialize cursor variables
    DECLARE cursor_card_id INT;
    DECLARE cursor_card_expire_date DATE;
    DECLARE cursor_card_type ENUM('debit_card', 'credit_card', 'combination_card');

    -- Cursor iterates through all cards
    DECLARE card_cursor CURSOR FOR
        SELECT id, expire_date, type 
        FROM card;
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
    
    -- Open the cursor
    OPEN card_cursor;
    
    -- Fetch the first row
    FETCH card_cursor INTO cursor_card_id, cursor_card_expire_date, cursor_card_type;
    
    -- Iterate through all cards
    card_loop: LOOP
        -- Exit the loop if no more rows
        IF done THEN
            LEAVE card_loop;
        END IF;

        -- Check if the card's expiration date has passed.
        IF cursor_card_expire_date < NOW() THEN
            -- Check card type and update the corresponding child table
            CASE
                WHEN cursor_card_type = 'debit_card' THEN
                    UPDATE debit_card SET active = 0 WHERE card_id = cursor_card_id;
                WHEN cursor_card_type = 'credit_card' THEN
                    UPDATE credit_card SET active = 0 WHERE card_id = cursor_card_id;
                WHEN cursor_card_type = 'combination_card' THEN
                    UPDATE combination_card SET active = 0 WHERE card_id = cursor_card_id;
            END CASE;
        END IF;

        -- Fetch the next row
        FETCH card_cursor INTO cursor_card_id, cursor_card_expire_date, cursor_card_type;
    END LOOP;
    
    -- Close the cursor
    CLOSE card_cursor;
    
END //

DELIMITER ;