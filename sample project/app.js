(async () => {

    const axios = require('axios').default;

    async function getBreedsList() {
        return axios.get('https://dog.ceo/api/breeds/list/all').then((resp) => {
            return resp.data;
        });
    }
    async function getBreedRandom() {
        return axios.get('https://dog.ceo/api/breeds/image/random').then((resp) => {
            return resp.data;
        });
    }
    async function getBreedImgs() {
        return axios.get('https://dog.ceo/api/breed/hound/images').then((resp) => {
            return resp.data;
        });
    }

    async function getSubBreedsList() {
        return axios.get('https://dog.ceo/api/breed/hound/list').then((resp) => {
            return resp.data;
        });
    }

    let breedsListJSON = await getBreedsList()
    let breedRandomJSON = await getBreedRandom()
    let breedImgsJSON = await getBreedImgs()
    let subBreedsListJSON = await getSubBreedsList()

    console.log(breedsListJSON)
    console.log(breedRandomJSON)
    console.log(breedImgsJSON)
    console.log(subBreedsListJSON)

})();