import React, { useCallback, useMemo, useState, useEffect } from 'react'

const ProductManagement = () => {

    const [ tableList, setTableList ] = useState([])

    const [ mapData, setMapData ] = useState([
        [{port:'SG'}, {port:'ZH'}],
        [{color:'red'},{color:'blue'},],
        [{size:'41'}, {size:'42'}],
    ])

    useEffect(() => {
        setTableList(doPermutation(mapData))
    }, [mapData])

   const handleSetMapData = () => {
       mapData[0].push({port:'JP'})
       setMapData(mapData)
       setTableList(doPermutation(mapData))
    }

    // 排列组合函数
    const doPermutation = (arr) => {
        let results = []
        let result = []

        doExchange(arr, 0)
        function doExchange(arr, index){
            for (let i = 0; i < arr[index].length; i++) {
                result[index] = arr[index][i]
                console.log('======>>>doPermutation:',result[index])
                console.log('======>>>doPermutation-result:',result)
                if(index !== arr.length - 1){
                    doExchange(arr, index + 1)
                }else {
                    results.push(Object.assign({}, ...result))
                }
            }
        }
        return results
    }

    console.log('------>>>tableList:',tableList)
    return (
        <div className='product-manage'>
            {
                tableList && tableList.map((item,index) => {
                    let _itemKeys = Object.keys(item)
                    return (<div key={index}>
                        {_itemKeys.map((tableValue, index) => <span key={index}>{item[tableValue]}</span>)}
                    </div>)
                })
            }
            <button onClick={() => handleSetMapData() }>Click Me</button>
        </div>
    )

}

export default ProductManagement