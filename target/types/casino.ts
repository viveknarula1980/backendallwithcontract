/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/casino.json`.
 */
export type Casino = {
  "address": "5vgLU8GyehUkziMaKHCtyPu6YZgo11wct8rTHLdz4z1",
  "metadata": {
    "name": "casino",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "activateUserVault",
      "discriminator": [
        206,
        42,
        182,
        219,
        174,
        102,
        115,
        64
      ],
      "accounts": [
        {
          "name": "player",
          "writable": true,
          "signer": true
        },
        {
          "name": "userVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "player"
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
              "name": "activateArgs"
            }
          }
        }
      ]
    },
    {
      "name": "crashLock",
      "discriminator": [
        170,
        112,
        48,
        62,
        92,
        76,
        201,
        69
      ],
      "accounts": [
        {
          "name": "player"
        },
        {
          "name": "feePayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "userVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "player"
              }
            ]
          }
        },
        {
          "name": "houseVault",
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
                  99,
                  114,
                  97,
                  115,
                  104
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
        },
        {
          "name": "sysvarInstructions",
          "docs": [
            "CHECK"
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "crashLockArgs"
            }
          }
        }
      ]
    },
    {
      "name": "crashResolve",
      "discriminator": [
        75,
        244,
        103,
        129,
        254,
        180,
        243,
        37
      ],
      "accounts": [
        {
          "name": "player",
          "writable": true
        },
        {
          "name": "houseVault",
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
          "name": "userVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "player"
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
                  99,
                  114,
                  97,
                  115,
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
                "account": "pendingCrash"
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
            "CHECK"
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "crashResolveArgs"
            }
          }
        }
      ]
    },
    {
      "name": "depositToVault",
      "discriminator": [
        18,
        62,
        110,
        8,
        26,
        106,
        248,
        151
      ],
      "accounts": [
        {
          "name": "player",
          "writable": true,
          "signer": true
        },
        {
          "name": "userVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "player"
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
              "name": "depositArgs"
            }
          }
        }
      ]
    },
    {
      "name": "diceLock",
      "discriminator": [
        110,
        226,
        174,
        228,
        80,
        4,
        9,
        114
      ],
      "accounts": [
        {
          "name": "player"
        },
        {
          "name": "feePayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "userVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "player"
              }
            ]
          }
        },
        {
          "name": "houseVault",
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
        },
        {
          "name": "sysvarInstructions",
          "docs": [
            "CHECK"
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "diceLockArgs"
            }
          }
        }
      ]
    },
    {
      "name": "diceResolve",
      "discriminator": [
        38,
        210,
        108,
        113,
        1,
        118,
        222,
        115
      ],
      "accounts": [
        {
          "name": "player",
          "writable": true
        },
        {
          "name": "houseVault",
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
          "name": "userVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "player"
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
                "path": "pending.nonce",
                "account": "pendingDice"
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
            "CHECK"
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "diceResolveArgs"
            }
          }
        }
      ]
    },
    {
      "name": "flipLock",
      "discriminator": [
        0,
        153,
        238,
        231,
        149,
        241,
        212,
        92
      ],
      "accounts": [
        {
          "name": "player"
        },
        {
          "name": "feePayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "userVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "player"
              }
            ]
          }
        },
        {
          "name": "houseVault",
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
                  102,
                  108,
                  105,
                  112
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
        },
        {
          "name": "sysvarInstructions",
          "docs": [
            "CHECK"
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "flipLockArgs"
            }
          }
        }
      ]
    },
    {
      "name": "flipResolve",
      "discriminator": [
        224,
        27,
        181,
        154,
        232,
        191,
        240,
        53
      ],
      "accounts": [
        {
          "name": "player",
          "writable": true
        },
        {
          "name": "houseVault",
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
          "name": "userVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "player"
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
                  102,
                  108,
                  105,
                  112
                ]
              },
              {
                "kind": "account",
                "path": "player"
              },
              {
                "kind": "account",
                "path": "pending.nonce",
                "account": "pendingFlip"
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
            "CHECK"
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "flipResolveArgs"
            }
          }
        }
      ]
    },
    {
      "name": "houseWithdraw",
      "discriminator": [
        91,
        80,
        134,
        212,
        232,
        189,
        132,
        39
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Admin signer (must match hard-coded ADMIN_PUBKEY_BYTES)"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "houseVault",
          "docs": [
            "House vault PDA"
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
          "name": "destination",
          "docs": [
            "Where funds go – can be ANY wallet"
          ],
          "writable": true
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
              "name": "houseWithdrawArgs"
            }
          }
        }
      ]
    },
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
      "name": "initHouseVault",
      "discriminator": [
        82,
        247,
        65,
        25,
        166,
        239,
        30,
        112
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "houseVault",
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
      "name": "minesLock",
      "discriminator": [
        101,
        80,
        171,
        11,
        130,
        3,
        209,
        3
      ],
      "accounts": [
        {
          "name": "player"
        },
        {
          "name": "feePayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "userVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "player"
              }
            ]
          }
        },
        {
          "name": "houseVault",
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
        },
        {
          "name": "sysvarInstructions",
          "docs": [
            "CHECK"
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "minesLockArgs"
            }
          }
        }
      ]
    },
    {
      "name": "minesResolve",
      "discriminator": [
        19,
        64,
        239,
        151,
        85,
        72,
        52,
        32
      ],
      "accounts": [
        {
          "name": "player",
          "writable": true
        },
        {
          "name": "houseVault",
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
          "name": "userVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "player"
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
                "path": "pending.nonce",
                "account": "pendingMines"
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
            "CHECK"
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "minesResolveArgs"
            }
          }
        }
      ]
    },
    {
      "name": "plinkoLock",
      "discriminator": [
        75,
        240,
        100,
        114,
        146,
        242,
        174,
        111
      ],
      "accounts": [
        {
          "name": "player"
        },
        {
          "name": "feePayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "userVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "player"
              }
            ]
          }
        },
        {
          "name": "houseVault",
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
                  112,
                  108,
                  105,
                  110,
                  107,
                  111,
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
        },
        {
          "name": "sysvarInstructions",
          "docs": [
            "CHECK"
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "plinkoLockArgs"
            }
          }
        }
      ]
    },
    {
      "name": "plinkoResolve",
      "discriminator": [
        53,
        105,
        194,
        155,
        193,
        113,
        64,
        225
      ],
      "accounts": [
        {
          "name": "player",
          "writable": true
        },
        {
          "name": "houseVault",
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
          "name": "userVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "player"
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
                  112,
                  108,
                  105,
                  110,
                  107,
                  111,
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
                "path": "pending.nonce",
                "account": "pendingPlinko"
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
            "CHECK"
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "plinkoResolveArgs"
            }
          }
        }
      ]
    },
    {
      "name": "slotsLock",
      "discriminator": [
        71,
        187,
        22,
        140,
        121,
        119,
        132,
        195
      ],
      "accounts": [
        {
          "name": "player"
        },
        {
          "name": "feePayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "userVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "player"
              }
            ]
          }
        },
        {
          "name": "houseVault",
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
                  115,
                  112,
                  105,
                  110
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
        },
        {
          "name": "sysvarInstructions",
          "docs": [
            "CHECK"
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "slotsLockArgs"
            }
          }
        }
      ]
    },
    {
      "name": "slotsResolve",
      "discriminator": [
        73,
        187,
        59,
        35,
        76,
        38,
        123,
        24
      ],
      "accounts": [
        {
          "name": "player",
          "writable": true
        },
        {
          "name": "houseVault",
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
          "name": "userVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "player"
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
                  115,
                  112,
                  105,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "player"
              },
              {
                "kind": "account",
                "path": "pending.nonce",
                "account": "pendingSlots"
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
            "CHECK"
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": {
              "name": "slotsResolveArgs"
            }
          }
        }
      ]
    },
    {
      "name": "updateAdmin",
      "discriminator": [
        161,
        176,
        40,
        213,
        60,
        184,
        179,
        228
      ],
      "accounts": [
        {
          "name": "authority",
          "docs": [
            "Hard-coded admin must sign to rotate admin_config"
          ],
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
        }
      ],
      "args": [
        {
          "name": "newAdminPubkey",
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
      "name": "withdrawFromVault",
      "discriminator": [
        180,
        34,
        37,
        46,
        156,
        0,
        211,
        238
      ],
      "accounts": [
        {
          "name": "player",
          "writable": true,
          "signer": true
        },
        {
          "name": "userVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "player"
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
              "name": "withdrawArgs"
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
      "name": "pendingCrash",
      "discriminator": [
        66,
        252,
        25,
        251,
        45,
        157,
        108,
        224
      ]
    },
    {
      "name": "pendingDice",
      "discriminator": [
        152,
        40,
        204,
        32,
        164,
        127,
        150,
        168
      ]
    },
    {
      "name": "pendingFlip",
      "discriminator": [
        196,
        4,
        205,
        59,
        107,
        133,
        172,
        11
      ]
    },
    {
      "name": "pendingMines",
      "discriminator": [
        236,
        117,
        0,
        186,
        53,
        66,
        60,
        89
      ]
    },
    {
      "name": "pendingPlinko",
      "discriminator": [
        168,
        93,
        33,
        167,
        159,
        249,
        123,
        228
      ]
    },
    {
      "name": "pendingSlots",
      "discriminator": [
        76,
        59,
        68,
        221,
        238,
        222,
        169,
        76
      ]
    },
    {
      "name": "userVault",
      "discriminator": [
        23,
        76,
        96,
        159,
        210,
        10,
        5,
        22
      ]
    }
  ],
  "events": [
    {
      "name": "crashLocked",
      "discriminator": [
        178,
        68,
        201,
        217,
        187,
        84,
        176,
        235
      ]
    },
    {
      "name": "crashResolved",
      "discriminator": [
        59,
        45,
        74,
        100,
        78,
        216,
        81,
        227
      ]
    },
    {
      "name": "diceLocked",
      "discriminator": [
        83,
        34,
        64,
        3,
        201,
        39,
        117,
        255
      ]
    },
    {
      "name": "diceResolved",
      "discriminator": [
        216,
        15,
        76,
        163,
        132,
        33,
        62,
        82
      ]
    },
    {
      "name": "flipLocked",
      "discriminator": [
        188,
        162,
        200,
        140,
        174,
        216,
        188,
        52
      ]
    },
    {
      "name": "flipResolved",
      "discriminator": [
        42,
        161,
        38,
        229,
        162,
        18,
        99,
        57
      ]
    },
    {
      "name": "houseWithdrawn",
      "discriminator": [
        207,
        57,
        254,
        62,
        148,
        108,
        100,
        178
      ]
    },
    {
      "name": "minesLocked",
      "discriminator": [
        147,
        16,
        220,
        69,
        114,
        210,
        219,
        51
      ]
    },
    {
      "name": "minesResolved",
      "discriminator": [
        140,
        5,
        10,
        43,
        57,
        209,
        28,
        23
      ]
    },
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
    },
    {
      "name": "slotsLocked",
      "discriminator": [
        82,
        55,
        24,
        136,
        147,
        149,
        28,
        88
      ]
    },
    {
      "name": "slotsResolved",
      "discriminator": [
        81,
        188,
        2,
        58,
        209,
        201,
        7,
        77
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
      "msg": "Expired signature/nonce"
    },
    {
      "code": 6002,
      "name": "badParams",
      "msg": "Bad params"
    },
    {
      "code": 6003,
      "name": "vaultMismatch",
      "msg": "Vault mismatch"
    },
    {
      "code": 6004,
      "name": "insufficientVault",
      "msg": "Insufficient vault balance"
    },
    {
      "code": 6005,
      "name": "badPayout",
      "msg": "Payout sanity check failed"
    },
    {
      "code": 6006,
      "name": "badPending",
      "msg": "Already settled or not found"
    }
  ],
  "types": [
    {
      "name": "activateArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "initialDeposit",
            "type": "u64"
          }
        ]
      }
    },
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
      "name": "crashLockArgs",
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
          },
          {
            "name": "ed25519InstrIndex",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "crashLocked",
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
      "name": "crashResolveArgs",
      "type": {
        "kind": "struct",
        "fields": [
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
      "name": "crashResolved",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "pubkey"
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
    },
    {
      "name": "depositArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "diceLockArgs",
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
          },
          {
            "name": "ed25519InstrIndex",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "diceLocked",
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
      "name": "diceResolveArgs",
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
    },
    {
      "name": "diceResolved",
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
      "name": "flipLockArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "betAmount",
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
          },
          {
            "name": "ed25519InstrIndex",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "flipLocked",
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
            "name": "side",
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
      "name": "flipResolveArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "winnerSide",
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
    },
    {
      "name": "flipResolved",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "pubkey"
          },
          {
            "name": "winnerSide",
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
      "name": "houseWithdrawArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "houseWithdrawn",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "to",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "minesLockArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "rows",
            "type": "u8"
          },
          {
            "name": "cols",
            "type": "u8"
          },
          {
            "name": "mines",
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
            "name": "ed25519InstrIndex",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "minesLocked",
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
            "name": "rows",
            "type": "u8"
          },
          {
            "name": "cols",
            "type": "u8"
          },
          {
            "name": "mines",
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
      "name": "minesResolveArgs",
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
    },
    {
      "name": "minesResolved",
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
            "name": "checksum",
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
      "name": "pendingCrash",
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
      "name": "pendingDice",
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
      "name": "pendingFlip",
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
          },
          {
            "name": "settled",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "pendingMines",
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
            "name": "rows",
            "type": "u8"
          },
          {
            "name": "cols",
            "type": "u8"
          },
          {
            "name": "mines",
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
      "name": "pendingPlinko",
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
      "name": "pendingSlots",
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
      "name": "plinkoLockArgs",
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
          },
          {
            "name": "ed25519InstrIndex",
            "type": "u8"
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
      "name": "plinkoResolveArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "checksum",
            "type": "u8"
          },
          {
            "name": "totalPayout",
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
      "name": "plinkoResolved",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "pubkey"
          },
          {
            "name": "totalPayout",
            "type": "u64"
          },
          {
            "name": "checksum",
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
      "name": "slotsLockArgs",
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
          },
          {
            "name": "ed25519InstrIndex",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "slotsLocked",
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
      "name": "slotsResolveArgs",
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
    },
    {
      "name": "slotsResolved",
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
            "name": "checksum",
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
      "name": "userVault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "r1",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "r2",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "r3",
            "type": "i64"
          },
          {
            "name": "r4",
            "type": "u64"
          },
          {
            "name": "r5",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "withdrawArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
