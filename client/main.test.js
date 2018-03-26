import renderBlaze from 'blaze-renderer'
import cheerio from 'cheerio'
import './main.js';
import {Developers} from "../imports/collections/Developers"
import { runInFiber } from 'testable-meteor'

test('renders main', runInFiber(() => {
  expect(renderBlaze('main')).toMatchSnapshot()
}))

test('it shows no developers info when they are not available', runInFiber(() => {
  const $ = cheerio.load(renderBlaze('main'))
  expect($('.test-developers p').html()).toEqual("No developers :-(")
}))

test('it displays the developers when available', runInFiber(() => {
  Developers.insert({name: "Lukasz", surname: "Gandecki", company: "TheBrain Software House"})
  Developers.insert({name: "Sam", surname: "Hatoum", company: "Xolv.io"})

  const $ = cheerio.load(renderBlaze('main'))

  expect($('.test-developers li ul').length).toEqual(2)
  expect($('.test-developers li ul:nth-child(1)').html()).toEqual("Lukasz Gandecki @TheBrain Software House")
  expect($('.test-developers li ul:nth-child(2)').html()).toEqual("Sam Hatoum @Xolv.io")
}))