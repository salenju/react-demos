import React, { useState } from 'react'
import { SkuCard } from './SkuCard'

// 定义了Empty,这个Empty对空的时候进行设置
export const Empty = Symbol('empty')

export const SkuGroup = (props) => {
  const { value, onChange, skuName } = props

  const [selected, setSelected] = useState(value)
  const { children } = props

  const _onChange = (value, activate) => {
    const _value = !activate && selected === value ? Empty : value
    setSelected(_value)
    onChange?.(_value)
  }


  // 代码中的几个关键变量
// skuList: 商品拥有的所有sku组合的型号(SPU中的所有商品类型)
// sku: 需要显示的sku card
// selectSku: radio显示选中值的[1, 2, 3]

// 初始化的时候aviableSku就是所有的商品类目
const _getSku = (aviableSku = []) => {
    const _sku = {};
    const _aviableSku = {};

    // 得到目前可以选择的所有商品的sku
    aviableSku.forEach(item => {
        item.forEach(x => {
            const key = JSON.stringify({ key_id: x.key_id, key: x.key });

            const value = {
                value_id: x.value_id,
                value: x.value,
                disabled: false
            };

            _aviableSku[key]
                ? _aviableSku[key].some(z => z.value_id === x.value_id)
                ? null
            : _aviableSku[key].push(value)
            : (_aviableSku[key] = [value]);
        });
    });

    // 将SKU中所有不满足aviableSku的东西diabled掉
    skuList.forEach(item => {
        // 每个商品
        item.forEach((x, i) => {
            // 商品下的每个sku
            const key = JSON.stringify({ key_id: x.key_id, key: x.key });
            const value = {
                value_id: x.value_id,
                value: x.value,
                disabled: !_aviableSku[key].some(item => item.value_id === x.value_id)
            };

            _sku[key]
                ? _sku[key].some(z => z.value_id === x.value_id)
                ? null
            : _sku[key].push(value)
            : (_sku[key] = [value]);
        });
    });

    setMySku(_sku);
};

useEffect(() => {
    // 利用useRef记录上一次选择sku的状态
    if (prevSku.current) {
        // 找到哪一个SKU的值发生了变化
        const cIndex = findChangeIndex(prevSku.current, selectSku);
        if (cIndex !== -1) {
            const changeValue = selectSku[cIndex];
            let otherCondition = {};

            const keys = Object.keys(sku);
            selectSku.forEach((item, index) => {
                if (
                    changeValue === Empty
                    // 改变值为Empty,说明原来选中,现在取消选中场景
                    ? index !== cIndex && item !== Empty
                    // 说明Item是有限定值的
                    : item !== Empty
                ) {
                    // 将限定值保存在otherCondition中
                    // 记录现在的限定状态
                    const key_id = JSON.parse(keys[index])["key_id"];
                    otherCondition[key_id]?.push(item) ??
                        (otherCondition[key_id] = [item]);
                }
            });

            // 通过限定矩阵的值挑选出满足条件的商品类别
            const aviableSku = skuList.filter(good => {
                const aviableGood = good.map(sku => {
                    const isInOther = otherCondition[sku.key_id];
                    return isInOther !== undefined
                        ? isInOther.includes(sku.value_id)
                    : true;
                });

                return aviableGood.every(item => item);
            });

            _getSku(aviableSku);
        }
    } else {
        _getSku(skuList);
    }

    prevSku.current = selectSku;
}, [selectSku]);

  const renderGroupChild = (child, index) => {
    const { props: childProps } = child

    return React.cloneElement(child, {
      ...childProps,
      onChange: _onChange,
      activate: childProps.value === selected,
      key: `create-${index}`,
      style: {
        ...(childProps?.style ?? {}),
        marginLeft: index === 0 ? 0 : '20px',
      },
    })
  }

  return (
    <div className="skuGroup">
      {skuName && <div className="labelName">{skuName}</div>}
      {children.map((child, index) => {
        return child?.type === SkuCard ? renderGroupChild(child, index) : child
      })}
    </div>
  )
}
