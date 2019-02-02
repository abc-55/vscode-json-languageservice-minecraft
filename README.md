# vscode-json-languageservice-minecraft
A _vscode-json-languageservice_ fork with extra minecraft features

API
----
The _vscode-json-languageservice-minecraft_ can be used as a drop-in replacement for
_vscode-json-languageservice_ with one caveat: the document settings argument
for `doValidation` should always be `{ comments: 'ignore', trailingCommas: 'error' }`
because minecraft supports comments but not trailning commas.
 - *doValidation* analyses an input string and returns syntax and lint errros.
 - *doComplete* provides completion proposals for a given location. *doResolve* resolves a completion proposal
 - *doResolve* resolves a completion proposals.
 - *doHover* provides a hover text for a given location.
 - *findDocumentSymbols* provides all symbols in the given document
 - *findDocumentColors* provides all color symbols in the given document, *getColorPresentations* returns available color formats for a color symbol.
 - *format* formats the code at the given range.
 - *getFoldingRanges* gets folding ranges for the given document
 - *getSelectionRanges* gets selection ranges for a given location.

 - use *parseJSONDocument* create a JSON document from source code, or *newJSONDocument* to create the document from an AST.

Installation
------------

    npm install vscode-json-languageservice-minecraft
