//todo hashed password .

const crypto = require("crypto");

//! MD5 password hashing;

const MD5Hashed = crypto
  .createHash("MD5")
  .update("Redwan@Labib12")
  .digest("hex");

  console.log("input password: Redwan@Labib12 ") //? MD5 use kora safe na. eta use.
  console.log("password Hashed:", MD5Hashed)

const MD5Hashed2 = crypto
  .createHash("MD5")
  .update("Redwan@Labib12")
  .digest("hex");

  console.log("input password: Redwan@Labib12 ")
  console.log("password Hashed:", MD5Hashed2)

  console.log("\n"+"-".repeat(80))

  const Sha256Hashed = crypto.createHash("Sha256").update("Redwan@Labib12").digest("hex")

  console.log("input password: Redwan@Labib12 ")
  console.log("password Sha256 Hashed:", Sha256Hashed)

  const Sha512Hashed = crypto.createHash("Sha512").update("Redwan@Labib12").digest("hex")

  console.log("input password: Redwan@Labib12 ")
  console.log("password Sha256 Hashed:", Sha512Hashed)

  const Sha1024Hashed = crypto.createHash("Sha1024").update("Redwan@Labib12").digest("hex")

  console.log("input password: Redwan@Labib12 ")
  console.log("password Sha256 Hashed:", Sha1024Hashed)
