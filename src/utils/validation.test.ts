import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContactForm, generateDispatchHash } from './validation.ts';

test('validation: valid contact form passes', () => {
  const result = validateContactForm({
    name: 'Sarah Connor',
    email: 'sarah@skynet.net',
    subject: 'AI Research Collaboration',
    message: 'Hello Ankush, I would like to discuss an opportunity on machine learning.'
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validation: missing required fields fail', () => {
  const result = validateContactForm({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.subject);
  assert.ok(result.errors.message);
});

test('validation: invalid email format fails', () => {
  const result = validateContactForm({
    name: 'John Doe',
    email: 'not-an-email',
    subject: 'Valid Subject',
    message: 'This is a valid long enough message.'
  });
  assert.equal(result.isValid, false);
  assert.equal(result.errors.email, 'Please provide a valid email format');
});

test('validation: generateDispatchHash produces consistent hex string', () => {
  const data = {
    name: 'Alice',
    email: 'alice@example.com',
    subject: 'Test',
    message: 'Hello there developer'
  };
  const hash = generateDispatchHash(data);
  assert.ok(hash.startsWith('0x'));
  assert.equal(hash.length, 10);
});
