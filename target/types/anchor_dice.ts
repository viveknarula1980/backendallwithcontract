/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/anchor_dice.json`.
 */
export type AnchorDice = {
  "address": "2m2qnCreEkuSf1CCZmWvjyBgAWkDYF13quCvsyEkDzGT",
  "metadata": {
    "name": "anchorDice",
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
      "name": "placeBetLock",
      "docs": [
        "Step 1: Player deposits bet into vault and opens a PendingBet"
      ],
      "discriminator": [
        190,
        183,
        55,
        72,
        4,
        52,
        138,
        222
      ],
      "accounts": [
        {
          "name": "player",
          "docs": [
            "Player (signer) — will deposit bet_amount"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "vault",
          "docs": [
            "Vault PDA (native SOL). Program holds funds here."
          ],
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
          "name": "pendingBet",
          "docs": [
            "Pending bet PDA"
          ],
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
              "name": "placeBetLockArgs"
            }
          }
        }
      ]
    },
    {
      "name": "resolveBet",
      "docs": [
        "Step 2: Backend signs result. Program verifies pre-instruction + rails, then pays if win"
      ],
      "discriminator": [
        137,
        132,
        33,
        97,
        48,
        208,
        30,
        159
      ],
      "accounts": [
        {
          "name": "player",
          "docs": [
            "Player (not required to sign for resolution)"
          ],
          "writable": true
        },
        {
          "name": "vault",
          "docs": [
            "Vault PDA"
          ],
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
          "docs": [
            "Admin config PDA containing backend ed25519 pubkey"
          ],
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
          "name": "pendingBet",
          "docs": [
            "Pending bet PDA to resolve (refund rent to player on success)"
          ],
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
                "path": "pending_bet.nonce",
                "account": "pendingBet"
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
              "name": "resolveBetArgs"
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
      "name": "pendingBet",
      "discriminator": [
        83,
        207,
        56,
        119,
        59,
        148,
        240,
        242
      ]
    }
  ],
  "events": [
    {
      "name": "betLocked",
      "discriminator": [
        230,
        84,
        251,
        66,
        85,
        174,
        217,
        15
      ]
    },
    {
      "name": "betResolved",
      "discriminator": [
        133,
        89,
        89,
        125,
        4,
        219,
        82,
        137
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
      "msg": "Bet params invalid"
    },
    {
      "code": 6004,
      "name": "badPayout",
      "msg": "Payout sanity check failed"
    },
    {
      "code": 6005,
      "name": "vaultMismatch",
      "msg": "Vault mismatch"
    },
    {
      "code": 6006,
      "name": "badBet",
      "msg": "Bet not found or already settled"
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
            "docs": [
              "Trusted ed25519 public key (32 bytes) of your backend signer"
            ],
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
      "name": "betLocked",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "betType",
            "type": "u8"
          },
          {
            "name": "target",
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
      "name": "betResolved",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "pubkey"
          },
          {
            "name": "win",
            "type": "bool"
          },
          {
            "name": "roll",
            "type": "u8"
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
      "name": "pendingBet",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "betType",
            "type": "u8"
          },
          {
            "name": "target",
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
      "name": "placeBetLockArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "betType",
            "type": "u8"
          },
          {
            "name": "target",
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
      "name": "resolveBetArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "roll",
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
