-- muutokset 15.11.2023
-- Lisätään 'pin' sekä 'user_id' sarake 'card' taulukkoon
ALTER TABLE card
ADD COLUMN pin VARCHAR(255) AFTER id,
ADD COLUMN user_id INT UNSIGNED AFTER id,
ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES user(id);
-- poistetaan 'pin_code' sarake muista tauluista
ALTER TABLE credit_card DROP COLUMN pin_code;
ALTER TABLE debit_card DROP COLUMN pin_code;
ALTER TABLE combination_card DROP COLUMN pin_code;


-- muutokset 19.11.2023
-- Lisätään 'pin' sekä 'user_id' sarake 'account' taulukkoon
ALTER TABLE account
ADD COLUMN user_id INT UNSIGNED AFTER id,
ADD CONSTRAINT fk_account_id FOREIGN KEY (user_id) REFERENCES user(id);
-- poistetaan 'user_id' sarake muista tauluista
ALTER TABLE credit_account DROP COLUMN user_id;
ALTER TABLE savings_account DROP COLUMN user_id;
ALTER TABLE checking_account DROP COLUMN user_id;


-- muutokset 28.11.2023
-- Muokataan inquiry taulua ja lisätään sinne amount sekä date -kentät
ALTER TABLE inquiry
ADD COLUMN amount INT UNSIGNED AFTER card_id,
ADD COLUMN date DATETIME AFTER transaction_type_code;
-- muutetaan inquiry -taulun column tyyppejä DECIMAL (19,4) muodosta DECIMAL(10,2):een
ALTER TABLE inquiry MODIFY amount DECIMAL(10, 2) DEFAULT NULL;
ALTER TABLE inquiry MODIFY credit_balance DECIMAL(10, 2) NOT NULL DEFAULT 0;
-- Sama homma transactionissa ja transferissa
ALTER TABLE transaction MODIFY COLUMN balance DECIMAL(10,2);
ALTER TABLE transfer MODIFY COLUMN amount DECIMAL(10,2);
-- lisätään transfer -tauluun date
ALTER TABLE transfer
ADD COLUMN date DATETIME AFTER transaction_type_code;