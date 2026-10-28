import test from 'node:test';
import assert from 'node:assert/strict';
import { parseAndExecuteCommand } from './terminalParser.ts';

test('terminalParser: help command returns help lines', () => {
  const result = parseAndExecuteCommand('help');
  assert.ok(result.output.length > 5);
  const containsHelp = result.output.some(l => l.text.includes('help'));
  assert.equal(containsHelp, true);
});

test('terminalParser: about command sets scroll_to_section to about', () => {
  const result = parseAndExecuteCommand('about');
  assert.equal(result.action, 'scroll_to_section');
  assert.equal(result.targetSection, 'about');
  assert.ok(result.output.some(l => l.text.includes('Ankush Soni')));
});

test('terminalParser: clear command returns clear action with empty output', () => {
  const result = parseAndExecuteCommand('clear');
  assert.equal(result.action, 'clear');
  assert.equal(result.output.length, 0);
});

test('terminalParser: cat resume outputs resume details', () => {
  const result = parseAndExecuteCommand('cat resume');
  assert.ok(result.output.some(l => l.text.includes('RESUME ARCHIVE')));
});

test('terminalParser: unknown command returns command not found error', () => {
  const result = parseAndExecuteCommand('foobar_nonexistent');
  assert.ok(result.output.some(l => l.type === 'error' && l.text.includes('bash: command not found')));
});

test('terminalParser: whitespace-only input returns empty output', () => {
  const result = parseAndExecuteCommand('    ');
  assert.equal(result.output.length, 0);
});
