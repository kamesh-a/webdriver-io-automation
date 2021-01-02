import { expect } from "chai";

export function checkIfElementExists(selector: string): void {
  const nrOfElements = $$(selector);
  expect(nrOfElements).to.have.length.of.at.least(
    1,
    `Element with selector "${selector}" should exist on the page`
  );
}
