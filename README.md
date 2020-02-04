# SingularityNET Frontend Monorepo

## Prerequisites
### Windows
- Node >= 10.14.1 < 12.0.0
- yarn >= 1.15.0 < 2.0.0
### Linux
- Node >= 10.16.0 < 12.0.0
- Yarn >= 1.15.0  < 2.0.0

## Initial setup
- git clone `Repo link`
- cd `Repo name`
- yarn

That's it you're all set up. You can start play with the repo.

## Starting Marketplace
- cd `packages/marketplace-dapp`
- cp `.env.example` `.env`
- Add the appropriate values for the keys in the `.env` file
- cd `../../`
- yarn start:marketplace

Marketplace is ready for you. 

## Starting RFAI
- cd `packages/rfai-dapp`
- cp `.env.example` `.env`
- Add the appropriate values for the keys in the `.env` file
- cd `../../`
- yarn start:rfai

## Starting PUBLISHER
- cd `packages/publisher-dapp`
- cp `.env.example` `.env`
- Add the appropriate values for the keys in the `.env` file
- cd `../../`
- yarn start:publisher

## Building new components
- cd `packages/shared`
- Add the component in the `src/components` folder
- Add story for it in the `index.stories.js` file
- yarn build:shared
  
Awesome. You can start using your components in any other project. Just import it from the path `shared/dist/components/[ComponentName]`

## Cleaning the node_modules
Developers try new things and may end up in mess. Don't worry! we got you covered! Just run `yarn nuke` from the `root`. Node modules from all the packages will be cleaned and you can start fresh.
