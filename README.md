folder structure must be: 
proto/
├─ account.proto
├─ workspace.proto
└─ generated/
├─ account.ts
└─ workspace.ts

# Proto Definitions

This repository contains Protocol Buffer (`.proto`) definitions and their generated TypeScript outputs.

## Folder Structure


## Description

- `account.proto`  
  Contains protobuf message and service definitions related to accounts.

- `workspace.proto`  
  Contains protobuf message and service definitions related to workspaces.

- `generated/`  
  Holds auto-generated TypeScript files created from the `.proto` definitions.  
  These files **should not be edited manually**.

## Notes

- Modify only `.proto` files.
- Regenerate TypeScript files after any change to proto definitions.
- Generated files can optionally be excluded from version control.

## License

MIT

