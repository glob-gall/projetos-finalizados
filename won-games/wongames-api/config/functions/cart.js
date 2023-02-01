const cartGamesIds = async(cart)=>{
    return await cart.map(({id})=>({id}))
}

const cartItems = async (cart)=>{
    let games = []
    await Promise.all(cart.map(async (game)=>{
        const validGame = await strapi.services.game.findOne({
            id:game.id
        });
        if(validGame){
            games.push(validGame);
        }
    }))
    return games
}

const total = async (games)=>{
    const amount = await games.reduce((acc,game)=>{
        return acc+game.price
    },0)

    return ~~(amount * 100);
}

module.exports = {
    cartItems,total,cartGamesIds
}