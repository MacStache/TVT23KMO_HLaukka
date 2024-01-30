-- poistetaan vanha proseduuri jos sellainen on
DROP PROCEDURE IF EXISTS truncate_all_tables;

-- TRUNCATE PROCEDUURI: POISTAA KAIKEN DATAN TIETOKANNASTA! ÄLÄ KÄYTÄ TÄTÄ ELLET OLE AIVAN VARMA, ETTÄ HALUAT KÄYTTÄÄ TÄTÄ!
DELIMITER //
-- asetetaan foreign_key_checks nollaksit ettei tule riippuvuuksista ongelmia poistettaessa
set foreign_key_checks = 0;

CREATE PROCEDURE truncate_all_tables()
BEGIN
  DECLARE done INT DEFAULT FALSE;
  DECLARE tableName VARCHAR(255);
  DECLARE cur2 CURSOR FOR SELECT name FROM temp_table_names;
  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
  -- luodaan väliaikainen taulukko taulukoiden nimille
  CREATE TEMPORARY TABLE IF NOT EXISTS temp_table_names (name VARCHAR(255));

  -- tyhjennetään väliaikainen taulu varmuuden vuoksi
  DELETE FROM temp_table_names;

  -- lisätään tauluun tietokannan taulukoiden nimet
  INSERT INTO temp_table_names
    SELECT TABLE_NAME
    FROM INFORMATION_SCHEMA.TABLES
    WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_SCHEMA = 'banksim';

  -- loopataan taulukkoon kaikki taulujen nimet truncate komentoa varten

  OPEN cur2;
  read_loop2: LOOP
    FETCH cur2 INTO tableName;
    IF done THEN
      LEAVE read_loop2;
    END IF;

    -- rakennetaan ja ajetaan truncate komento kaikille tauluille
    SET @sql = CONCAT('TRUNCATE TABLE ', tableName);
    PREPARE stmt FROM @sql;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
  END LOOP;
  CLOSE cur2;

  -- poistetaan väliaikainen taulukko
  DROP TEMPORARY TABLE IF EXISTS temp_table_names;
END //

DELIMITER ;

-- Kutsu proceduuria tällä
call truncate_all_tables();