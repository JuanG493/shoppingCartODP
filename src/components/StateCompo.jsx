import { useEffect, useState } from "react";
import { carContext } from "./carContex";

const StateCompo = ({ children }) => {
    const [car, setCar] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalOriginalPrice, setTotalOriginalPrice] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);



    useEffect(() => {
        let partialTotal = 0;
        let partialOriginalPrice = 0;
        let partialDiscount = 0;

        car.forEach(product => {
            let formatDiscount = Number.parseFloat((product.discount / 100).toPrecision(4));
            let discountVal = Number.parseFloat((product.price * formatDiscount).toPrecision(4));
            let finalPrice = product.price - discountVal;
            partialDiscount += discountVal;
            partialTotal += finalPrice * product.cuantity;
            partialOriginalPrice += product.price;
        })
        setTotal(partialTotal)
        setTotalOriginalPrice(partialOriginalPrice)
        setTotalDiscount(partialDiscount)

    }, [car])

    const checkout = () => {
        setCar([])
        setTotal(0)
        setTotalOriginalPrice(0)
        setTotalDiscount(0)
    }

    const addProduct = (product) => {
        let diferentCar = car.filter(c => c.id != product.id);
        let sameCar = car.filter(c => c.id == product.id);

        if (sameCar.length == 1) {
            let amg = sameCar[0].cuantity + 1;
            product.cuantity = inRange(amg) ? amg : sameCar[0].cuantity;
        }
        diferentCar.push(product);
        setCar(diferentCar)
    }
    const inRange = (cuantity) => {
        if (cuantity <= 9 && cuantity >= 1) {
            return true;
        } else {
            return false;
        }
    }

    const deleteProduct = (productId) => {
        setCar(car.filter(c => c.id != productId));
    }

    const operator = (idProduct, operator) => {
        const carCustomized = car.map(c => {
            if (c.id == idProduct) {
                let op = operator == "+" ? 1 : -1;
                let result = c.cuantity + op;

                return {
                    ...c,
                    cuantity: inRange(result) ? result : c.cuantity,
                };
            } else {
                return c;
            }
        })
        setCar(carCustomized);
    }

    return (
        <carContext.Provider value={
            {
                car,
                addProduct,
                deleteProduct,
                operator,
                total,
                totalOriginalPrice,
                totalDiscount,
                checkout
            }
        }> {children}
        </carContext.Provider>
    )

}

export default StateCompo;