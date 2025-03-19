import { Fragment, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { parseSumAsLocal } from "../../utils/parseSumAsLocal";
import JustValidate from "just-validate";
import "./CreditCalcForm.scss";

export const CreditCalcForm = () => {
  const [creditSum, setCreditSum] = useState();
  const [mounthCount, setMounthCount] = useState(12);
  const [time, setTime] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(0);
  const [error, setError] = useState(null);

  const handleCalcResult = (creditSum, monthCount, time) => {
    return (creditSum / +monthCount) * +time;
  };

  const hanldeShowResult = () => {
    if (!creditSum) {
      setError("Введите сумму кредита");
    } else if (creditSum <= 0) {
      setError("Введите верное значение");
    } else {
      setResult(handleCalcResult(creditSum, mounthCount, time));
      setError(null);
      setShowResult(true);
    }
  };

  useEffect(() => {
    setResult(handleCalcResult(creditSum, mounthCount, time));
  }, [mounthCount, time, creditSum]);

  return (
    <form className="calc-form">
      <div className="calc-form__content-wrapper">
        <h2>Ваша сумма кредита</h2>
        <input
          id="amount"
          type="text"
          placeholder="Введите данные"
          value={creditSum}
          onChange={(e) => setCreditSum(e.target.value)}
        />
        <Button variant="text" onClick={hanldeShowResult}>
          Рассчитать
        </Button>
        {error && <span className="calc-form__error">{error}</span>}
      </div>
      <div className="calc-form__content-wrapper--horizontal">
        <h2>Количество месяцев</h2>
        <div className="radio-group">
          {[12, 24, 36, 48].map((months) => (
            <Fragment key={months}>
              <input
                type="radio"
                name="monthCount"
                value={months}
                checked={mounthCount === months}
                onChange={(e) => setMounthCount(Number(e.target.value))}
                id={months}
              />
              <label className="radio-label" htmlFor={months}>
                <span>{months}</span>
              </label>
            </Fragment>
          ))}
        </div>
      </div>

      {showResult && (
        <div className="calc-form__content-wrapper">
          <h2>Итого ваш платеж по кредиту</h2>
          <div className="radio-group">
            {[
              ["в год", 12],
              ["в месяц", 1],
            ].map((el) => (
              <Fragment key={el[1]}>
                <input
                  type="radio"
                  name="time"
                  value={el[1]}
                  checked={time === el[1]}
                  onChange={(e) => setTime(Number(e.target.value))}
                  id={el[0]}
                />
                <label className="radio-label" htmlFor={el[0]}>
                  <span>{el[0]}</span>
                </label>
              </Fragment>
            ))}
          </div>
          <p className="calc-form__result">
            {parseSumAsLocal(result.toFixed(0))}
          </p>
        </div>
      )}
      <Button
        size="big"
        type="submit"
        onClick={(e) => e.preventDefault()}
        style={{ marginTop: "auto" }}
      >
        Добавить
      </Button>
    </form>
  );
};
