CREATE TABLE "userdata" (
  "id" SERIAL PRIMARY KEY ,
  "username" varchar(255) UNIQUE,
  "email"  UNIQUE,
  "password" varchar(255),
  "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "movie" (
  "id" integer PRIMARY KEY,
  "title" varchar(255)
);

CREATE TABLE "movie_scores" (
  "movie_id" integer,
  "avg_score" DECIMAL(1,1),
  "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "review" (
  "id" integer PRIMARY KEY,
  "user_id" integer,
  "username" varchar(255),
  "movie_id" integer,
  "score" integer,
  "body" text
);

CREATE type "yes_no" as ENUM('1','0'); 

CREATE TABLE "follows" (
  "following_user_id" integer,
  "followed_user_id" integer,
  "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
  "following" YES_NO
);

CREATE TABLE "movie_watched" (
  "id" integer PRIMARY KEY,
  "user_id" integer,
  "movie_id" integer,
  "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "movie_to_watch" (
  "user_id" integer,
  "movie_id" integer
);

CREATE TABLE "favorites" (
  "id" integer PRIMARY KEY,
  "user_id" integer,
  "movie_id" integer,
  "created_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "group_members" (
  "group_id" integer,
  "is_admin" YES_NO,
  "user_id" integer,
  "username" varchar(255),
  "joined_at" timestamp DEFAULT CURRENT_TIMESTAMP,
  "left_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "group" (
  "id" integer PRIMARY KEY,
  "group_name" varchar(255),
  "created_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "group_invite" (
  "id" integer PRIMARY KEY,
  "group_id" integer,
  "sender_id" integer,
  "receiver_id" integer,
  "following" YES_NO,
  "sent_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "group_to_watch" (
  "id" integer PRIMARY KEY,
  "username" varchar(255),
  "group_id" integer,
  "movie_id" integer,
  "movie_title" varchar(255),
  "movie_playing" DATE,
  "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE "favorites" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "favorites" ADD FOREIGN KEY ("movie_id") REFERENCES "movie" ("id");

ALTER TABLE "review" ADD FOREIGN KEY ("movie_id") REFERENCES "movie" ("id");

ALTER TABLE "review" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "review" ADD FOREIGN KEY ("username") REFERENCES "user" ("username");

ALTER TABLE "follows" ADD FOREIGN KEY ("following_user_id") REFERENCES "user" ("id");

ALTER TABLE "follows" ADD FOREIGN KEY ("followed_user_id") REFERENCES "user" ("id");

ALTER TABLE "movie_watched" ADD FOREIGN KEY ("movie_id") REFERENCES "movie" ("id");

ALTER TABLE "movie_watched" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "movie_to_watch" ADD FOREIGN KEY ("movie_id") REFERENCES "movie" ("id");

ALTER TABLE "movie_to_watch" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "movie_scores" ADD FOREIGN KEY ("movie_id") REFERENCES "movie" ("id");

ALTER TABLE "group_members" ADD FOREIGN KEY ("group_id") REFERENCES "group" ("id");

ALTER TABLE "group_members" ADD FOREIGN KEY ("is_admin") REFERENCES "user" ("id");

ALTER TABLE "group_members" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "group_members" ADD FOREIGN KEY ("username") REFERENCES "user" ("username");

ALTER TABLE "group_invite" ADD FOREIGN KEY ("group_id") REFERENCES "group" ("id");

ALTER TABLE "group_invite" ADD FOREIGN KEY ("sender_id") REFERENCES "user" ("id");

ALTER TABLE "group_invite" ADD FOREIGN KEY ("receiver_id") REFERENCES "user" ("id");

ALTER TABLE "group_invite" ADD FOREIGN KEY ("following") REFERENCES "follows" ("following");

ALTER TABLE "group_to_watch" ADD FOREIGN KEY ("movie_id") REFERENCES "movie" ("id");

ALTER TABLE "group_to_watch" ADD FOREIGN KEY ("movie_title") REFERENCES "movie" ("title");

ALTER TABLE "group_to_watch" ADD FOREIGN KEY ("group_id") REFERENCES "group" ("id");

ALTER TABLE "group_to_watch" ADD FOREIGN KEY ("username") REFERENCES "user" ("username");
