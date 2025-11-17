/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/coinflip.json`.
 */
export type Coinflip = {
  "address": "5NnSFQrH7BF14ocwmUMTbMktBjo7E2496pvi2w9Up4KA",
  "metadata": {
    "name": "coinflip",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "initialize",
      "docs": [
        "Create the vault PDA as a plain System account (space = 0)."
      ],
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "lock",
      "docs": [
        "Player deposits entry into vault and opens their pending round."
      ],
      "discriminator": [
        21,
        19,
        208,
        43,
        237,
        62,
        255,
        87
      ],
      "accounts": [
        {
          "name": "player",
          "writable": true,
          "signer": true
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "pending",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  116,
                  99,
                  104
                ]
              },
              {
                "kind": "account",
                "path": "player"
              },
              {
                "kind": "arg",
                "path": "nonce"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "entryLamports",
          "type": "u64"
        },
        {
          "name": "side",
          "type": "u8"
        },
        {
          "name": "nonce",
          "type": "u64"
        },
        {
          "name": "expiryUnix",
          "type": "i64"
        }
      ]
    },
    {
      "name": "resolve",
      "docs": [
        "Backend resolves: pays winner from vault; loser payout=0. Closes pending to player."
      ],
      "discriminator": [
        246,
        150,
        236,
        206,
        108,
        63,
        58,
        10
      ],
      "accounts": [
        {
          "name": "player",
          "writable": true,
          "relations": [
            "pending"
          ]
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "admin"
        },
        {
          "name": "pending",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  116,
                  99,
                  104
                ]
              },
              {
                "kind": "account",
                "path": "player"
              },
              {
                "kind": "account",
                "path": "pending.nonce",
                "account": "pending"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "instructions",
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "checksum",
          "type": "u8"
        },
        {
          "name": "payout",
          "type": "u64"
        },
        {
          "name": "ed25519IxIndex",
          "type": "u8"
        },
        {
          "name": "winnerSide",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "pending",
      "discriminator": [
        36,
        180,
        147,
        170,
        72,
        175,
        173,
        126
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "badBet",
      "msg": "Invalid bet amount"
    },
    {
      "code": 6001,
      "name": "badSide",
      "msg": "Invalid side (must be 0 or 1)"
    },
    {
      "code": 6002,
      "name": "badChecksum",
      "msg": "Checksum mismatch"
    },
    {
      "code": 6003,
      "name": "alreadySettled",
      "msg": "Round already settled"
    },
    {
      "code": 6004,
      "name": "playerMismatch",
      "msg": "Pending player mismatch"
    },
    {
      "code": 6005,
      "name": "vaultMismatch",
      "msg": "Vault PDA mismatch"
    },
    {
      "code": 6006,
      "name": "wrongWinnerSide",
      "msg": "Winner side does not match player's chosen side"
    }
  ],
  "types": [
    {
      "name": "pending",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "pubkey"
          },
          {
            "name": "entryLamports",
            "type": "u64"
          },
          {
            "name": "side",
            "type": "u8"
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "expiredAt",
            "type": "i64"
          },
          {
            "name": "settled",
            "type": "bool"
          }
        ]
      }
    }
  ]
};
