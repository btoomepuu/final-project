set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";
CREATE TABLE "public"."users" (
  "userId" serial NOT NULL,
  "firstName" TEXT NOT NULL,
  "lastName" TEXT NOT NULL,
  "email" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL,
  "createdAt" TIMESTAMPTZ NOT NULL default now(),
  CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."orders" (
  "orderId" serial NOT NULL,
  "typeCoffee" TEXT NOT NULL,
  "coffeeStyle" TEXT NOT NULL,
  "beanGrind" TEXT NOT NULL,
  "amount" integer NOT NULL,
  "frequency" integer NOT NULL,
  "total" integer NOT NULL,
  "userId" integer NOT NULL,
  "addressId" integer NOT NULL,
  CONSTRAINT "orders_pk" PRIMARY KEY ("orderId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."addresses" (
  "addressId" serial NOT NULL,
  "street" TEXT NOT NULL,
  "city" TEXT NOT NULL,
  "state" TEXT NOT NULL,
  "zipcode" integer NOT NULL,
  "userId" integer NOT NULL,
  CONSTRAINT "addresses_pk" PRIMARY KEY ("addressId")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "orders" ADD CONSTRAINT "orders_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "orders" ADD CONSTRAINT "orders_fk1" FOREIGN KEY ("addressId") REFERENCES "addresses"("addressId");
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
