import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

import Store from './Store'

const SkuList = observer(() => {
  const { state, actions } = Store
  const {
    _allSpecsList,
    _selectable,
    _selected,
    _selectTips,
    _selectedItem,
  } = state
  const { handleClickSpecs, getButtonStatus } = actions

  console.log('=========>>>>_selected:', toJS(_selected))
  console.log('=========>>>>_selectable:', toJS(_selectable))
  console.log('=========>>>>_allSpecsList:', toJS(_allSpecsList))
  console.log('=========>>>>_selectedItem:', toJS(_selectedItem))

  return (
    <Wrapper className="sku-list">
      <h3 className="sl-price">{_selectedItem ? _selectedItem.price : null}</h3>
      <h3 className="sl-price">{_selectTips}</h3>
      {_allSpecsList.map((spec, x) => {
        return (
          <div key={spec.specId} className='sl-spec-row'>
            <span>{spec.specName}</span>
            {spec.value_list.map((value, y) => (
              <button
                key={value.specItemId}
                disabled={value.disabled}
                className={value.selected ? 'sl-btn-active' : ''}
                onClick={() =>
                  handleClickSpecs({
                    specId: spec.specId,
                    specItemId: value.specItemId,
                    select: getButtonStatus(value.selected, value.disabled),
                    x,
                    y,
                  })
                }
              >
                {value.itemName}
              </button>
            ))}
          </div>
        )
      })}
    </Wrapper>
  )
})

const Wrapper = styled('div')`
  .sl-price {
    color: red;
  }
  button {
    margin: 0 10px;
  }
  .sl-spec-row {
    padding: 5px 0;
  }
  .sl-btn-active {
    background: #f40;
  }
`

export default SkuList
