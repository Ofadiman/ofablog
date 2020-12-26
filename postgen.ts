/* eslint-disable no-empty */
import { green, whiteBright } from 'chalk'
import { command } from 'execa'
import ora from 'ora'

const spinner = ora(`${green('[Eslint]')} ${whiteBright('Running eslint.')}`)

const codegen = async (): Promise<void> => {
  spinner.start()

  try {
    await command('eslint {src,codegen}/**/*.{ts,tsx} --fix')
  } catch {
  } finally {
    spinner.stop()
  }
}

void codegen()
