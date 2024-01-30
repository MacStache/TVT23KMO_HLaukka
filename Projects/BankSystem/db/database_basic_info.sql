-- lisätään käyttäjät
INSERT INTO user(password, first_name, last_name, email, admin)
	VALUES('pass01', 'Teppo', 'Testi', 'teppo.testi@banksim.com', 0); 
INSERT INTO user(password, first_name, last_name, email, admin)
	VALUES('pass02', 'Marja', 'Masto', 'marja.masto@banksim.com', 0);
INSERT INTO user(password, first_name, last_name, email, admin)
	VALUES('pass03', 'Admin', 'Adminator', 'admin@banksim.com', 1);

-- Lisätään kortit
CALL add_card_and_type(1,1,@created_Card_Id); -- Käyttäjä 1, debit_card
CALL add_card_and_type(1,2,@created_Card_Id); -- Käyttäjä 1, credit_card
CALL add_card_and_type(2,1,@created_Card_Id); -- Käyttäjä 2, debit_card
CALL add_card_and_type(2,2,@created_Card_Id); -- Käyttäjä 2, credit_card
CALL add_card_and_type(2,3,@created_Card_Id); -- Käyttäjä 2, combination_card

-- lisätään tilit
-- Käyttäjä 1
-- Säästötili
INSERT INTO account(user_id, card_id, type, created_at)
	VALUES(1, 1, 1, NOW());
    INSERT INTO savings_account(card_id, user_id, active, balance, type, interest_rate)
		VALUES(1, 1, 1, '550', 'savings_account', '2.5');
-- Luottotili
INSERT INTO account(user_id, card_id, type, created_at)
	VALUES(1, 2, 2, NOW());
    INSERT INTO credit_account(card_id, user_id, active, balance, credit_balance, type, charge_rate, loan_interest)
		VALUES(2, 1, 1, '1500', '500', 'credit_account', '5', '15');	
-- Käyttötili
INSERT INTO account(user_id, card_id, type, created_at)
	VALUES(1, 1, 3, NOW());
    INSERT INTO checking_account(card_id, user_id, active, balance, type, charge_rate, interest_rate)
		VALUES(1, 1, 1, '2250', 'checking_account', '5', '5');

-- Käyttäjä 2
-- Säästötili
INSERT INTO account(user_id, card_id, type, created_at)
	VALUES(2, 3, 1, NOW());
    INSERT INTO savings_account(card_id, user_id, active, balance, type, interest_rate)
		VALUES(4, 3, 1, '7565', 'savings_account', '2.5');
-- Luottotili
INSERT INTO account(user_id, card_id, type, created_at)
	VALUES(2, 4, 2, NOW());
    INSERT INTO credit_account(card_id, user_id, active, balance, credit_balance, type, charge_rate, loan_interest)
		VALUES(4, 2, 1, '700', '1300', 'credit_account', '5', '15');
	
-- käyttö- sekä luottotili ja näille yhdistelmäkortti
INSERT INTO account(user_id, card_id, type, created_at)
	VALUES(2, 5, 3, NOW());
    INSERT INTO checking_account(card_id, user_id, active, balance, type, charge_rate, interest_rate)
		VALUES(5, 2, 1, 234, 'checking_account', '5', '15');
	INSERT INTO credit_account(card_id, user_id, active, balance, credit_balance, type, charge_rate, loan_interest)
		VALUES(5, 2, 1, 100, 1900, 'credit_account', '5', '15');
   