const useLocalStorage = ()=>{

    const addToStorage = (id)=>{
        const isExists = getStorage();
        let tourPlanCart = {};
        if(!isExists){
            tourPlanCart[id] = 1;
        }
        else{
            tourPlanCart = JSON.parse(isExists);
            if(!tourPlanCart[id]){
                tourPlanCart[id] = 1;
            }
            else{
                alert("already added.")
            }
        }
        updateStorage(tourPlanCart);

    };

    const getStorage = ()=>{
        return localStorage.getItem('tour_plan_cart');
    };

    const updateStorage = (cart)=>{
        localStorage.setItem('tour_plan_cart', JSON.stringify(cart));
    };

    return {
        addToStorage,
        getStorage,
        updateStorage
    }

}

export default useLocalStorage;