import { useState } from 'react';

import parse from 'html-react-parser';

import { Container, Stack, Typography } from '@mui/material';

import {
  FAQWrapper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionTitle,
  AccordionText,
} from './faq.styles';

type QuestionsAndAnswers = {
  [id: string]: {
    id: string;
    number: number;
    question: string;
    answer: string;
    urlPath?: string;
  };
};

const questionsAndAnswers: QuestionsAndAnswers = {
  1: {
    id: '1',
    number: 1,
    question: 'Сколько стоит доставка?',
    answer: `<b>Для ЛДНР и КРЫМА</b><br/>Доставка товара зависит от общей стоимости заказа. Калькулятор доставки можно посмотреть тут: <a href="https://sadovod-online.ru/delivery-calculator">https://sadovod-online.ru/delivery-calculator</a>
       <br/><br/><b>ДЛЯ РФ</b><br/>Стоимость доставки соответствует тарифу ТК «СДЭК» Калькулятор доставки можно посмотреть тут: <a href="https://www.cdek.ru/ru/calculate">https://www.cdek.ru/ru/calculate</a>
      `,
  },
  2: {
    id: '2',
    number: 2,
    question: 'Какую комиссию берёт сервис Садовод-онлайн?',
    answer:
      'Садовод онлайн берёт 10% от стоимости товаров за организационный сбор и отправку, а также становится ответственным за выкупленный товар. Если что-то случается с товаром, например, не тот размер, товар повреждён или иные отклонения от заказа. В данном случаем Садовод-Онлайн выплачивает всю стоимость товара с 10% обратно клиенту взамен на не ликвидный товар. Важно: товар необходимо проверять на месте приёмки груза.',
  },
  3: {
    id: '3',
    number: 3,
    question: 'Как пополнить личный кабинет?',
    answer: `Пополнить личный кабинет можно несколькими способами:<br/><br/>
             1. На любом из отделений ТК "НАША ПОЧТА" Список отделений на карте представлен ниже. При оплате Вам необходимо сказать: Что вы пополняете личный кабинет на сайте Садовод-онлайн и номер вашего личного кабинета.<br/><br/>

             Пример: Мне необходимо положить 5 000 руб. на сайт Садовод-онлайн, на личный кабинет № (номер вашего личного кабинета)<br/><br/>

             2. Денежные средства можно положить путём перевода через карту банка РФ (Сбербанк или ПСБ) а также на карту ЦРБ ДНР. Узнать номер карты можно в личном кабинете на вкладке «баланс»<br/><br/>
             <b>ВАЖНО: после оплаты чек необходимо загрузить со своего личного кабинета. Загрузить можно на вкладке «Баланс»</b>
            `,
  },
  4: {
    id: '4',
    number: 4,
    question: 'Какой минимальный заказ?',
    answer:
      'Минимального заказ не существует, можно заказывать от 1-й единицы и от одного рубля',
  },
  5: {
    id: '5',
    number: 5,
    question: 'Можно ли заказывать у продавцов не из каталога?',
    answer:
      'Да, в заказе можно добавлять своё фото с любого источника (VK. Instagram WhatsApp и другие)',
  },
  6: {
    id: '6',
    number: 6,
    question: 'Как долго ждать заказ?',
    answer:
      'В среднем заказ доходит за 10-14 дней. Возможны задержки в праздники из-за большого количества заказов. Например, Новый год или 8-е Марта. Пожалуйста планируйте покупки чуть заранее что бы успеть получить товар',
  },
  7: {
    id: '7',
    number: 7,
    question: 'Когда будет выкуп?',
    answer:
      'Выкуп происходит 2 дня в неделю Среда и Суббота. Дни могут меняться от количества заказов, а также увеличиваться количество дней закупок',
  },
  8: {
    id: '8',
    number: 8,
    question: 'Можно ли вывести деньги с личного кабинета?',
    answer:
      'Можно, для вывода денежных средств необходимо зайти в личный кабинет и перейти на вкладку «Баланс» далее нажать кнопку «Вывод средств» указываем сумму для вывода. Денежные средства возвращается в течении 7-ми рабочих дней.',
  },
  9: {
    id: '9',
    number: 9,
    question: 'Загрузил чек, но кабинет не пополнился?',
    answer:
      'Каждый чек проверяется вручную на предмет подделок, в связи с этим возможна задержка с пополнением баланса! Чеки проверяются в течении 48 часов (не считая воскресенье).',
  },
  10: {
    id: '10',
    number: 10,
    question: 'Конфликт с менеджером?',
    answer:
      'Если у вас произошел конфликт или вы не можете связаться с менеджером. Свяжитесь с руководством по телефону: <a href="tel:380713234955">+38 071 323-49-55</a> (Viber).',
  },
};

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <FAQWrapper>
      <Container>
        <Stack>
          <Typography>FAQ</Typography>
          <Typography>Часто задаваемые вопросы:</Typography>
          {Object.values(questionsAndAnswers).map(QA => (
            <Accordion
              key={QA.id}
              expanded={expanded === `question${QA.id}`}
              onChange={handleChange(`question${QA.id}`)}
            >
              <AccordionSummary aria-controls={`question${QA.id}-content`}>
                <AccordionTitle>
                  <span>{QA.number}</span>
                  <span>{QA.question}</span>
                </AccordionTitle>
              </AccordionSummary>
              <AccordionDetails>
                <AccordionText>{parse(QA.answer)}</AccordionText>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Container>
    </FAQWrapper>
  );
};

export default FAQ;
