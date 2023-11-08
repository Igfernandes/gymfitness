import React, { useState } from "react";
import { View } from "react-native";
import { styleLayout } from "./styles/layout";
import { Button } from "../shared/forms/Button";
import { Select } from "../shared/forms/Select";
import { useOperation } from "./hooks/useOperation";
import { FormChecked } from "../shared/forms/FormChecked";
import { useCollpaseTimes } from "./hooks/useCollpaseTimes";
import { When } from "../shared/utils/When";

export default function Operation({ navigation }) {
  const {
    hasMonday,
    setHasMonday,
    hasTuesday,
    setHasTuesday,
    setHasWednesday,
    hasWednesday,
    hasThursday,
    setHasThursday,
    hasFriday,
    setHasFriday,
    hasSaturday,
    setHasSaturday,
    hasSunday,
    setHasSunday,
    hasDefault,
    setHasDefault,
  } = useCollpaseTimes();
  const {
    timeToClockSelect,
    segunda,
    setSegunda,
    terca,
    setTerca,
    quarta,
    setQuarta,
    quinta,
    setQuinta,
    sexta,
    setSexta,
    sabado,
    setSabado,
    domingo,
    setDomingo
  } = useOperation();
  const timesOfClock = timeToClockSelect();

  return (
    <View>
      <View style={styleLayout.form}>
        {/* Input Container */}
        <View style={styleLayout.content}>
          <FormChecked
            label="Segunda"
            setValue={setHasMonday}
            value={hasMonday}
          />
          <When isValid={hasMonday}>
            <View style={styleLayout.groupTime}>
              <Select
                style={styleLayout.selectGroup}
                select={{
                  style: styleLayout.select,
                }}
                label={"Início"}
                value={segunda.abertura}
                options={timesOfClock}
                setValue={(text) => {
                  setSegunda({ ...segunda, abertura: text });
                }}
              />
              <Select
                select={{
                  style: styleLayout.select,
                }}
                style={styleLayout.selectGroup}
                label={"Fim"}
                value={segunda.termino}
                options={timesOfClock}
                setValue={(text) => setSegunda({ ...segunda, termino: text })}
              />
            </View>
          </When>
        </View>
        <View style={styleLayout.content}>
          <FormChecked
            label="Terça"
            setValue={setHasTuesday}
            value={hasTuesday}
          />
          <When isValid={hasTuesday}>
            <View style={styleLayout.groupTime}>
              <Select
                style={styleLayout.selectGroup}
                select={{
                  style: styleLayout.select,
                }}
                label={"Início"}
                options={timesOfClock}
                value={terca.abertura}
                setValue={(text) => setTerca({ ...terca, abertura: text })}
              />
              <Select
                select={{
                  style: styleLayout.select,
                }}
                style={styleLayout.selectGroup}
                label={"Fim"}
                options={timesOfClock}
                value={terca.termino}
                setValue={(text) => setTerca({ ...terca, termino: text })}
              />
            </View>
          </When>
        </View>
        <View style={styleLayout.content}>
          <FormChecked
            label="Quarta"
            setValue={setHasWednesday}
            value={hasWednesday}
          />
          <When isValid={hasWednesday}>
            <View style={styleLayout.groupTime}>
              <Select
                style={styleLayout.selectGroup}
                select={{
                  style: styleLayout.select,
                }}
                label={"Início"}
                options={timesOfClock}
                value={quarta.abertura}
                setValue={(text) => setQuarta({ ...quarta, abertura: text })}
              />
              <Select
                select={{
                  style: styleLayout.select,
                }}
                style={styleLayout.selectGroup}
                label={"Fim"}
                options={timesOfClock}
                value={quarta.termino}
                setValue={(text) => setQuarta({ ...quarta, termino: text })}
              />
            </View>
          </When>
        </View>
        <View style={styleLayout.content}>
          <FormChecked
            label="Quinta"
            setValue={setHasThursday}
            value={hasThursday}
          />
          <When isValid={hasThursday}>
            <View style={styleLayout.groupTime}>
              <Select
                style={styleLayout.selectGroup}
                select={{
                  style: styleLayout.select,
                }}
                label={"Início"}
                options={timesOfClock}
                value={quinta.abertura}
                setValue={(text) => setQuinta({ ...quinta, abertura: text })}
              />
              <Select
                select={{
                  style: styleLayout.select,
                }}
                style={styleLayout.selectGroup}
                label={"Fim"}
                options={timesOfClock}
                value={quinta.termino}
                setValue={(text) => setQuinta({ ...quinta, termino: text })}
              />
            </View>
          </When>
        </View>
        <View style={styleLayout.content}>
          <FormChecked
            label="Sexta"
            setValue={setHasFriday}
            value={hasFriday}
          />
          <When isValid={hasFriday}>
            <View style={styleLayout.groupTime}>
              <Select
                style={styleLayout.selectGroup}
                select={{
                  style: styleLayout.select,
                }}
                label={"Início"}
                options={timesOfClock}
                value={sexta.abertura}
                setValue={(text) => setSexta({ ...sexta, abertura: text })}
              />
              <Select
                select={{
                  style: styleLayout.select,
                }}
                style={styleLayout.selectGroup}
                label={"Fim"}
                options={timesOfClock}
                value={sexta.termino}
                setValue={(text) => setSexta({ ...sexta, termino: text })}
              />
            </View>
          </When>
        </View>
        <View style={styleLayout.content}>
          <FormChecked
            label="Sabado"
            setValue={setHasSaturday}
            value={hasSaturday}
          />
          <When isValid={hasSaturday}>
            <View style={styleLayout.groupTime}>
              <Select
                style={styleLayout.selectGroup}
                select={{
                  style: styleLayout.select,
                }}
                label={"Início"}
                options={timesOfClock}
                value={sabado.abertura}
                setValue={(text) => setSabado({ ...sabado, abertura: text })}
              />
              <Select
                select={{
                  style: styleLayout.select,
                }}
                style={styleLayout.selectGroup}
                label={"Fim"}
                options={timesOfClock}
                value={sabado.termino}
                setValue={(text) => setSabado({ ...sabado, termino: text })}
              />
            </View>
          </When>
        </View>
        <View style={styleLayout.content}>
          <FormChecked
            label="Domingo"
            setValue={setHasSunday}
            value={hasSunday}
          />
          <When isValid={hasSunday}>
            <View style={styleLayout.groupTime}>
              <Select
                style={styleLayout.selectGroup}
                select={{
                  style: styleLayout.select,
                }}
                label={"Início"}
                options={timesOfClock}
                value={domingo.abertura}
                setValue={(text) => setDomingo({ ...domingo, abertura: text })}
              />
              <Select
                select={{
                  style: styleLayout.select,
                }}
                style={styleLayout.selectGroup}
                label={"Fim"}
                options={timesOfClock}
                value={domingo.termino}
                setValue={(text) => setDomingo({ ...domingo, termino: text })}
              />
            </View>
          </When>
        </View>
        {/*FLEXIBILIDADE DA POSIÇÃO DO BOTÃO */}
        <View style={styleLayout.formSubmit}>
          <Button text={"Cadastrar"} style={styleLayout.btnSubmit} />
        </View>
      </View>
    </View>
  );
}
