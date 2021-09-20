import React from 'react';

import './App.scss';
import classNames from 'classnames';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

class App extends React.PureComponent {
  state = {
    goods: [],
  }

  handleClick = (callback) => {
    callback()
      .then(result => this.setState({
        goods: result,
      }));
  }

  // loadAllGoods = () => (
  //   getAll()
  //     .then(result => this.setState({ goods: result }))
  // )

  // loadFiveGoods = () => (
  //   getAll()
  //     .then(result => (
  //       this.setState({
  //         goods: result
  //           .sort((a, b) => (a.name).localeCompare(b.name))
  //           .slice(0, 5),
  //       })
  //     ))
  // )

  // loadRedGoods = () => (
  //   getAll()
  //     .then(result => (
  //       this.setState({
  //         goods: result.filter(good => good.color === 'red'),
  //       })
  //     ))
  // )

  render() {
    return (
      <>
        <h1 className="title">
          Dynamic list of Goods
        </h1>

        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-link')}
            onClick={() => (
              this.handleClick(getAll)
            )}
          >
            Load all goods
          </button>

          <button
            type="button"
            className={classNames('button is-link')}
            onClick={() => (
              this.handleClick(get5First)
            )}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className={classNames('button is-link')}
            onClick={() => (
              this.handleClick(getRedGoods)
            )}
          >
            Load red goods
          </button>
        </div>

        <div className="content">
          <GoodsList goods={this.state.goods} />
        </div>
      </>
    );
  }
}

export default App;
