import React, { useEffect, useState, useMemo, useCallback } from "react";
import "./spec.css";

// 模拟接口数据
function fetchData() {
  return [
    {
      id: "319100479428696552",
      price: 44,
      msrp: 5.7,
      priceType: "Fixed",
      maxPrice: null,
      specs: ["China1", "Pair", "黑色橘线", "44码", "超纤革鞋面、普通橡胶底"]
    },
    {
      id: "319100479529359848",
      price: 37,
      msrp: 5.7,
      priceType: "Fixed",
      maxPrice: null,
      specs: ["China", "Pair", "黑色橘线", "37码", "超纤革鞋面、普通橡胶底"]
    },
    {
      id: "319100479613245928",
      price: 41,
      msrp: 5.7,
      priceType: "Fixed",
      maxPrice: null,
      specs: ["China", "Pair", "黑色橘线", "41码", "超纤革鞋面、普通橡胶底"]
    },
    {
      id: "319100479713909224",
      price: 38,
      msrp: 5.7,
      priceType: "Fixed",
      maxPrice: null,
      specs: ["China", "Pair", "黑色橘线", "38码", "超纤革鞋面、普通橡胶底"]
    },
    {
      id: "319100479814572520",
      price: 35,
      msrp: 5.7,
      priceType: "Fixed",
      maxPrice: null,
      specs: ["China", "Pair", "黑色橘线", "35码", "超纤革鞋面、普通橡胶底"]
    },
    {
      id: "319100479915235816",
      price: 43,
      msrp: 5.7,
      priceType: "Fixed",
      maxPrice: null,
      specs: ["China", "Pair", "黑色橘线", "43码", "超纤革鞋面、普通橡胶底"]
    },
    {
      id: "319100478824716776",
      price: 39,
      msrp: 5.7,
      priceType: "Fixed",
      maxPrice: null,
      specs: ["China", "Pair", "黑色橘线", "39码", "超纤革鞋面、普通橡胶底"]
    },
    {
      id: "319100478925380072",
      price: 42,
      msrp: 5.7,
      priceType: "Fixed",
      maxPrice: null,
      specs: ["China", "Pair", "黑色橘线", "42码", "超纤革鞋面、普通橡胶底"]
    },
    {
      id: "319100479026043368",
      price: 36,
      msrp: 5.7,
      priceType: "Fixed",
      maxPrice: null,
      specs: ["China", "Pair", "黑色橘线", "36码", "超纤革鞋面、普通橡胶底"]
    },
    {
      id: "319100479126706664",
      price: 46,
      msrp: 5.7,
      priceType: "Fixed",
      maxPrice: null,
      specs: ["China", "Pair", "黑色橘线", "46码", "超纤革鞋面、普通橡胶底"]
    },
    {
      id: "319100479227369960",
      price: 40,
      msrp: 5.7,
      priceType: "Fixed",
      maxPrice: null,
      specs: ["China", "Pair", "黑色橘线", "40码", "超纤革鞋面、普通橡胶底"]
    },
    {
      id: "319100479328033256",
      price: 45,
      msrp: 5.7,
      priceType: "Fixed",
      maxPrice: null,
      specs: ["China", "Pair", "黑色橘线", "45码", "超纤革鞋面、普通橡胶底"]
    }
  ];
}

function fetchData2() {
  return [
    {
      id: "319664716748298728",
      priceType: "QUOTE",
      maxPrice: null,
      specs: ["Dalian", "Case", "泰国芒果", "Red"]
    },
    {
      id: "319664716748167656",
      price: 2.27,
      msrp: 6,
      priceType: "FIXED",
      maxPrice: null,
      specs: ["Shenzhen", "Kilogram", "泰国芒果", "Red"]
    },
    {
      id: "319664716748167646",
      price: 2.27,
      msrp: 6,
      priceType: "FIXED",
      maxPrice: null,
      specs: ["Shenzhen", "Kilogram", "泰国芒果", "Blue"]
    },
    {
      id: "319643639783627240",
      price: 20.45,
      msrp: 30,
      priceType: "RANGE",
      maxPrice: 25,
      specs: ["Shenzhen", "Bag", "澳芒", "Blue"]
    },
    {
      id: "319664716748233192",
      price: 22.73,
      priceType: "RANGE",
      maxPrice: 28.41,
      specs: ["Singapore", "Bag", "泰国芒果", "Blue"]
    },
    {
      id: "319643639783496168",
      price: 22.73,
      msrp: 30,
      priceType: "FIXED",
      maxPrice: null,
      specs: ["Dalian", "Box", "澳芒", "Blue"]
    },
    {
      id: "319643639783365096",
      price: 25,
      msrp: 30,
      priceType: "FIXED",
      maxPrice: null,
      specs: ["Singapore", "Box", "澳芒", "Blue"]
    }
  ];
}

export default function App() {
  const [goods, setGoods] = useState([]);
  const [selectedSkuArr, setSelectedSkuArr] = useState([]);
  const [matchGoods, setMatchGoods] = useState([]);
  const [unite, setUnite] = useState([]);
  const [flatUnite, setFlatUnite] = useState([]);

  // 模拟接口，获取在售商品
  useEffect(() => {
    // setGoods(fetchData());
    setGoods(fetchData2());
  }, []);

  // 根据传入的商品，计算出sku二维数组
  const goods2skuMap = useCallback((_goods) => {
    if (_goods.length) {
      const skuMap = [];
      _goods.forEach((item) => {
        item.specs.forEach((sku, index) => {
          const target = skuMap[index];
          if (target) {
            if (!target.includes(sku)) target.push(sku);
          } else {
            skuMap[index] = [sku];
          }
        });
      });

      return skuMap;
    }
    return [];
  }, []);

  // 所有在售商品的 skuMap
  const skuMap = useMemo(() => {
    if (goods.length) {
      const t = goods2skuMap(goods);
      setSelectedSkuArr(new Array(t.length).fill(""));
      return t;
    }
    return [];
  }, [goods, goods2skuMap]);

  // 根据已选sku列表，匹配在售商品
  const getMatchGoods = useCallback(
    (targetSkuArr) => {
      const noEmptyItemArr = targetSkuArr.filter((item) => !!item);
      return goods.filter((good) =>
        noEmptyItemArr.every((sku) => good.specs.includes(sku))
      );
    },
    [goods]
  );

  // 是否存在包含目标sku的商品
  const isExistGoods = useCallback(
    (targetSkuArr) => {
      const noEmptyItemArr = targetSkuArr.filter((item) => !!item);
      return goods.some((good) =>
        noEmptyItemArr.every((sku) => good.specs.includes(sku))
      );
    },
    [goods]
  );

  // 点选sku
  const onSkuClick = useCallback((sku, group, index, skuMap, isDisabled) => {
    if (isDisabled) return;
    setSelectedSkuArr((arr) => {
      if (arr.includes(sku)) {
        arr[index] = "";
      } else {
        arr[index] = sku;
      }
      return [...arr];
    });
  }, []);

  // 匹配可选sku
  useEffect(() => {
    const matchList = getMatchGoods(selectedSkuArr);
    setMatchGoods(matchList);

    // 1 根据已选sku, 初步计算可选sku
    const sku2dArr = goods2skuMap(matchList);
    // 2 根据每组已选sku的兄弟节点，进一步扩充可选sku
    selectedSkuArr.forEach((sku, index) => {
      if (sku) {
        const siblinSkuArr = skuMap[index].filter((siblingSku) => {
          if (siblingSku === sku) return false;
          const copySelectedSkuArr = [...selectedSkuArr];
          copySelectedSkuArr[index] = siblingSku;
          console.log("是否存在包含此sku的商品", copySelectedSkuArr);
          return isExistGoods(copySelectedSkuArr);
        });
        // 2.1 扩充每组已选sku的兄弟节点
        sku2dArr[index] = sku2dArr[index].concat(siblinSkuArr);
      }
    });

    console.log("可选sku", JSON.stringify(sku2dArr));
    setFlatUnite(sku2dArr.flat(2));
    setUnite([...sku2dArr]);
  }, [getMatchGoods, isExistGoods, skuMap, goods2skuMap, selectedSkuArr]);

  return (
    <div>
      <div>已选sku：{JSON.stringify(selectedSkuArr)}</div>
      <div>可选的sku: {JSON.stringify(flatUnite)}</div>
      {skuMap.map((arr, index) => {
        return (
          <div key={`arr${index}`}>
            {arr.map((sku) => {
              const isDisabled = !flatUnite.length
                ? false
                : flatUnite.includes(sku)
                ? false
                : true;
              return (
                <span
                  key={`sku${sku}`}
                  className={`sku-item ${
                    selectedSkuArr.includes(sku) ? "sku-item-active" : ""
                  } ${isDisabled ? "sku-item-disabled" : ""}`}
                  onClick={() =>
                    onSkuClick(sku, arr, index, skuMap, isDisabled)
                  }
                >
                  {sku}
                </span>
              );
            })}
          </div>
        );
      })}

      <div>匹配的商品: {JSON.stringify(matchGoods)}</div>
    </div>
  );
}
