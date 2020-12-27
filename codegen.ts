/* eslint-disable no-empty */
import { PlopExitCodes } from '@ofadiman/plop'
import chalk from 'chalk'
import { command, ExecaReturnValue } from 'execa'
import ora from 'ora'

const codegen = async (): Promise<void> => {
  try {
    await command('plop', { stdio: 'inherit' })
  } catch (error: unknown) {
    if ((error as ExecaReturnValue).exitCode === PlopExitCodes.CancelCodegen) {
      console.info(`${chalk.red.bold('[Codegen]')} ${chalk.whiteBright('Task canceled.')}`)

      return
    }

    throw error
  }

  const spinner = ora(`${chalk.green('[Eslint]')} ${chalk.whiteBright('Running eslint.')}`)
  spinner.start()
  try {
    await command('eslint ./**/*.{ts,tsx} --fix')
  } catch {
  } finally {
    spinner.stop()
  }
}

void codegen()
