import React from 'react'

export default class VoteFooter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { store:{dispatch}} = this.props,

    return (
      <section>
        <button onClick={() => dispatch({type:'VOTE_SUPPORT'})}>支持</button>
        <button onClick={() => dispatch({type:'VOTE_AGAINST'})}>反对</button>
      </section>
    )
  }
}
