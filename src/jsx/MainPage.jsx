import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import CollapseInfo from './Collapse.jsx';
import Header from './Header.jsx';
import '../css/MainPage.css';
import {Airdrops} from '../airdrops.jsx';

class MainPage extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <div className="app">
        <Header className="header" />
        <Container>
          <Row className="content">
            <Col className="collapse-list item">
              <CollapseInfo
                name={'Что такое AirDrop? Что необходимо для участия?'}
                text={
                  <div>
                    <span role="img" aria-label="emoji">💰</span>
                    {' '}
                    <b>Airdrop</b>
                    {' '}
                    — это единоразовая раздача монет тем участникам криптосообщества, которые выполняют определенные действия или подходят под определенные критерии.
                  </div>
                }
              />
              <CollapseInfo
                name={'Какие виды AirDrop существуют?'}
                text={
                  <div>
                    <h5><b>Автоматический AirDrop</b></h5>
                    Держатели определенных криптовалют получают новые монеты, появившиеся в результате хардфорков сетей. Главным условием для получения таких монет является наличие кошелька, поддерживающего новые монеты.

                    <h5 style={{marginTop: '5px'}}>
                      <b>Поощрительный AirDrop</b>
                    </h5>
                    Это награда за определенные действия, помогающие в распространении информации о проекте.
                  </div>
                }
              />
              <CollapseInfo
                name={'Что необходимо для участия в AirDrop?'}
                text={
                  <div>
                    <ul>
                      <li>
                        Адрес электронной почты: желательно использовать новый или тот, к которому не привязаны биржи и кошельки.
                      </li>
                      <li>
                        Ethereum кошелек, поддерживающий стандарт ERC20. Также, вам могут понадобиться кошельки Bitcoin, Waves и Neo.
                      </li>
                      <li>
                        Телеграм-аккаунт, с которого надо будет подписаться на канал проекта.
                      </li>
                      <li>
                        Страницы в твиттере, фейсбуке или любых других социальных сетях, указанных в условиях airdrop.
                      </li>
                      <li>Аккаунт на форуме BitcoinTalk.</li>
                    </ul>
                  </div>
                }
              />
              <CollapseInfo
                name={'Как получить криптовалюту через AirDrop?'}
                text={
                  <div>
                    <ul>
                      <li>
                        Условия участия и регистрация могут быть разными – обычно они указаны в теме проекта или в самой форме регистрации.
                      </li>
                      <li>
                        Пока вы не получили монетки на свой кошелек, НЕ выходите из телеграмм групп и НЕ отписывайтесь от соцсетей проектов.
                      </li>
                      <li>
                        Токены обычно автоматически приходят на ваш кошелек в период от 7 до 90 дней, но в некоторых проектах нужно заходить самим и заказывать токены после окончания ICO.
                      </li>
                      <li>
                        Чтобы не забыть, где вы принимаете участие, лучше завести табличку и вносить туда всю информацию по проектам. Как дополнительный инструмент, вы можете использовать бота в телеграмм, который оповестит вас о получении токенов @ETHtokenExplorer_bot
                      </li>
                    </ul>
                  </div>
                }
              />
              <CollapseInfo
                name={'Где и как продать токены после AirDrop и Bounty?'}
                text={
                  <div>
                    Для этих целей вы можете использовать биржу EtherDelta. Это биржа, главной особенностью которой, является возможность торговли исключительно токенами ERC20.
                  </div>
                }
              />
              <CollapseInfo
                name={'Информация об актуальных AirDrop'}
                text={
                  <div>
                    <a href="https://t.me/thebestofairdrops">
                      The Best of Airdrops
                    </a>
                  </div>
                }
              />
            </Col>
            <Col className="airdrops item">
              <tbody>
                {Airdrops.map ((object, i) => (
                  <CollapseInfo name={object.name} text={object.text} />
                ))}
              </tbody>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainPage;
