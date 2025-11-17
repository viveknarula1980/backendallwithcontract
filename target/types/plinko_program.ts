/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/plinko_program.json`.
 */
export type PlinkoProgram = {
  "address": "F2ifZuckPtWFrGCxHpF968CVuaMihW9WggdPgbS9nsH",
  "metadata": {
    "name": "plinkoProgram",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "initAdmin",
      "discriminator": [
        97,
        65,
        97,
        27,
        200,
        206,
        72,
        219
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "adminConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110
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
      "args": [
        {
          "name": "adminPubkey",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "initVault",
      "discriminator": [
        77,
        79,
        85,
        150,
        33,
        217,
        52,
        106
      ],
      "accounts": [
        {
          "name": "payer",
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
          "name": "pendingRound",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "player"
              },
              {
                "kind": "arg",
                "path": "args.nonce"
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
          "name": "args",
          "type": {
            "defined": {
              "name": "lockArgs"
            }
          }
        }
      ]
    },
    {
      "name": "resolve",
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
          "writable": true
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
          "name": "adminConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110
                ]
              }
            ]
          }
        },
        {
          "name": "pendingRound",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "player"
              },
              {
                "kind": "account",
                "path": "pending_round.nonce",
                "account": "pendingRound"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "sysvarInstructions",
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "resolveArgs"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "adminConfig",
      "discriminator": [
        156,
        10,
        79,
        161,
        71,
        9,
        62,
        77
      ]
    },
    {
      "name": "pendingRound",
      "discriminator": [
        84,
        181,
        229,
        123,
        141,
        87,
        165,
        218
      ]
    }
  ],
  "events": [
    {
      "name": "plinkoLocked",
      "discriminator": [
        205,
        109,
        249,
        137,
        7,
        152,
        42,
        60
      ]
    },
    {
      "name": "plinkoResolved",
      "discriminator": [
        121,
        249,
        4,
        101,
        35,
        255,
        238,
        202
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidIx",
      "msg": "Invalid instruction data"
    },
    {
      "code": 6001,
      "name": "invalidEd25519",
      "msg": "Invalid ed25519 pre-instruction"
    },
    {
      "code": 6002,
      "name": "expired",
      "msg": "Expired signature"
    },
    {
      "code": 6003,
      "name": "badParams",
      "msg": "Bad params"
    },
    {
      "code": 6004,
      "name": "badPayout",
      "msg": "Payout sanity check failed"
    }
  ],
  "types": [
    {
      "name": "adminConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "adminPubkey",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "lockArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "unitAmount",
            "type": "u64"
          },
          {
            "name": "balls",
            "type": "u16"
          },
          {
            "name": "rows",
            "type": "u8"
          },
          {
            "name": "difficulty",
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
      }
    },
    {
      "name": "pendingRound",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "pubkey"
          },
          {
            "name": "unitAmount",
            "type": "u64"
          },
          {
            "name": "balls",
            "type": "u16"
          },
          {
            "name": "rows",
            "type": "u8"
          },
          {
            "name": "difficulty",
            "type": "u8"
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "expiryUnix",
            "type": "i64"
          },
          {
            "name": "settled",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "plinkoLocked",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "pubkey"
          },
          {
            "name": "unitAmount",
            "type": "u64"
          },
          {
            "name": "balls",
            "type": "u16"
          },
          {
            "name": "rows",
            "type": "u8"
          },
          {
            "name": "difficulty",
            "type": "u8"
          },
          {
            "name": "nonce",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "plinkoResolved",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "pubkey"
          },
          {
            "name": "payout",
            "type": "u64"
          },
          {
            "name": "nonce",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "resolveArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "checksum",
            "type": "u8"
          },
          {
            "name": "payout",
            "type": "u64"
          },
          {
            "name": "ed25519InstrIndex",
            "type": "u8"
          }
        ]
      }
    }
  ]
};
