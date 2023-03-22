import { useState } from "react";

const Bai3=() =>{
    const [a, setA] = useState(0)
    const [formData, setFormData] = useState('')
    const sumArray=()=>{
        const newSum=a.filter((item)=>{
            let sum=0
            while(item.a>0){
                item.a%=10
                sum+=item.a
                item.a/=10
                
            }
            return sum
        })
        setA(newSum)
    }

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    return(
        <div>
            <input placeholder="Nhập dãy số:" name={a} value={formData} onChange={onChange}></input>
            <button onClick={sumArray}>Sum</button>
            
        </div>
    );
};
export default Bai3;