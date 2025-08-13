import axios from "axios";
import { goodsState } from "../states/goodsState";
import { useSetRecoilState } from "recoil";
import { useEffect,  } from "react";

const useProductList = () =>{
    const setGoods = useSetRecoilState(goodsState);


    useEffect(() =>{
        const loadProductList = async() =>{
            try{
                const response = await axios.get('/api/products',{
                    params : {
                        page : 0,
                        size : 20
                    }
                })
                console.log(response.data, "바로 나야")
                // setGoods(response.data.content);
            }
            catch(error){
                console.log(error)
                setGoods([])
            }
            
        }
        loadProductList();

    },[setGoods])
}
export default useProductList;