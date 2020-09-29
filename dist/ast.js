let ast = {
	"type": "File",
	"start": 0,
	"end": 70,
	"loc": {
		"start": {
			"line": 1,
			"column": 0
		},
		"end": {
			"line": 2,
			"column": 35
		}
	},
	"errors": [],
	"program": {
		"type": "Program",
		"start": 0,
		"end": 70,
		"loc": {
			"start": {
				"line": 1,
				"column": 0
			},
			"end": {
				"line": 2,
				"column": 35
			}
		},
		"sourceType": "module",
		"interpreter": null,
		"body": [{
			"type": "ImportDeclaration",
			"start": 0,
			"end": 33,
			"loc": {
				"start": {
					"line": 1,
					"column": 0
				},
				"end": {
					"line": 1,
					"column": 33
				}
			},
			"specifiers": [{
				"type": "ImportSpecifier",
				"start": 9,
				"end": 12,
				"loc": {
					"start": {
						"line": 1,
						"column": 9
					},
					"end": {
						"line": 1,
						"column": 12
					}
				},
				"imported": {
					"type": "Identifier",
					"start": 9,
					"end": 12,
					"loc": {
						"start": {
							"line": 1,
							"column": 9
						},
						"end": {
							"line": 1,
							"column": 12
						},
						"identifierName": "say"
					},
					"name": "say"
				},
				"local": {
					"type": "Identifier",
					"start": 9,
					"end": 12,
					"loc": {
						"start": {
							"line": 1,
							"column": 9
						},
						"end": {
							"line": 1,
							"column": 12
						},
						"identifierName": "say"
					},
					"name": "say"
				}
			}],
			"source": {
				"type": "StringLiteral",
				"start": 20,
				"end": 32,
				"loc": {
					"start": {
						"line": 1,
						"column": 20
					},
					"end": {
						"line": 1,
						"column": 32
					}
				},
				"extra": {
					"rawValue": "./hello.js",
					"raw": "\"./hello.js\""
				},
				"value": "./hello.js"
			}
		}, {
			"type": "ExpressionStatement",
			"start": 35,
			"end": 70,
			"loc": {
				"start": {
					"line": 2,
					"column": 0
				},
				"end": {
					"line": 2,
					"column": 35
				}
			},
			"expression": {
				"type": "CallExpression",
				"start": 35,
				"end": 69,
				"loc": {
					"start": {
						"line": 2,
						"column": 0
					},
					"end": {
						"line": 2,
						"column": 34
					}
				},
				"callee": {
					"type": "MemberExpression",
					"start": 35,
					"end": 49,
					"loc": {
						"start": {
							"line": 2,
							"column": 0
						},
						"end": {
							"line": 2,
							"column": 14
						}
					},
					"object": {
						"type": "Identifier",
						"start": 35,
						"end": 43,
						"loc": {
							"start": {
								"line": 2,
								"column": 0
							},
							"end": {
								"line": 2,
								"column": 8
							},
							"identifierName": "document"
						},
						"name": "document"
					},
					"computed": false,
					"property": {
						"type": "Identifier",
						"start": 44,
						"end": 49,
						"loc": {
							"start": {
								"line": 2,
								"column": 9
							},
							"end": {
								"line": 2,
								"column": 14
							},
							"identifierName": "write"
						},
						"name": "write"
					}
				},
				"arguments": [{
					"type": "CallExpression",
					"start": 50,
					"end": 68,
					"loc": {
						"start": {
							"line": 2,
							"column": 15
						},
						"end": {
							"line": 2,
							"column": 33
						}
					},
					"callee": {
						"type": "Identifier",
						"start": 50,
						"end": 53,
						"loc": {
							"start": {
								"line": 2,
								"column": 15
							},
							"end": {
								"line": 2,
								"column": 18
							},
							"identifierName": "say"
						},
						"name": "say"
					},
					"arguments": [{
						"type": "StringLiteral",
						"start": 54,
						"end": 67,
						"loc": {
							"start": {
								"line": 2,
								"column": 19
							},
							"end": {
								"line": 2,
								"column": 32
							}
						},
						"extra": {
							"rawValue": "webpack 哈哈哈",
							"raw": "\"webpack 哈哈哈\""
						},
						"value": "webpack 哈哈哈"
					}]
				}]
			}
		}],
		"directives": []
	},
	"comments": []
}