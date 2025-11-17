/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/anchor_crash.json`.
 */
export type AnchorCrash = {
  "address": "7FydhAeaHUrwkhRkPoSUi4AHedQEGdn5gBwfzHyUBtAj",
  "metadata": {
    "name": "anchorCrash",
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
          "docs": [
            "It will be a System Program-owned account that only holds lamports for payouts.",
            "We do not deserialize structured data from it, and the seeds constraint enforces PDA derivation."
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
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "lock",
      "docs": [
        "Step 1: Player deposits bet into vault and opens a PendingRound"
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
          "name": "pendingRound",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  111,
                  117,
                  110,
                  100
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
      "docs": [
        "Step 2: Backend signs result. Program verifies pre-instruction + rails, then pays if cashed"
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
          "name": "pendingRound",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  111,
                  117,
                  110,
                  100
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
          "docs": [
            "We constrain the exact address using `address = SYSVAR_INSTRUCTIONS_ID`.",
            "It is safe to treat as UncheckedAccount because we only use it to load instructions."
          ],
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
      "name": "roundLocked",
      "discriminator": [
        19,
        58,
        91,
        157,
        24,
        76,
        207,
        7
      ]
    },
    {
      "name": "roundResolved",
      "discriminator": [
        204,
        146,
        253,
        187,
        8,
        61,
        75,
        29
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidEd25519",
      "msg": "Invalid ed25519 pre-instruction"
    },
    {
      "code": 6001,
      "name": "expired",
      "msg": "Expired signature"
    },
    {
      "code": 6002,
      "name": "badParams",
      "msg": "Params invalid"
    },
    {
      "code": 6003,
      "name": "badPayout",
      "msg": "Payout sanity check failed"
    },
    {
      "code": 6004,
      "name": "vaultMismatch",
      "msg": "Vault mismatch"
    },
    {
      "code": 6005,
      "name": "badRound",
      "msg": "Round not found or already settled"
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
      "name": "lockArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "betAmount",
            "type": "u64"
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
            "name": "amount",
            "type": "u64"
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
      "name": "resolveArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "checksum",
            "type": "u8"
          },
          {
            "name": "multiplierBps",
            "type": "u32"
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
    },
    {
      "name": "roundLocked",
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
            "name": "nonce",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "roundResolved",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "pubkey"
          },
          {
            "name": "cashed",
            "type": "bool"
          },
          {
            "name": "checksum",
            "type": "u8"
          },
          {
            "name": "multiplierBps",
            "type": "u32"
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
    }
  ]
};
