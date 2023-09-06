#!/usr/bin/env node
import chalk from "chalk";
import { Command } from "commander";
import moment from 'moment';

const program = new Command();

program
    .option('-t, --time', 'for time only(00:00)')
    .option('-d, --date', 'for date only(dd/mm/yyyy)')
    .action((option) => {
        if(option.time){
            const _date = new Date();
            let _time = '-------\n';
            _time += ` ${moment().format('/hh/mm/ss')}\n`;
            _time += '-------';
            console.log(chalk.greenBright(_time))
        }else if(option.date){
            let _out = `------------\n`;
            _out += ` ${moment().format('DD/MM/YYYY')}\n`;
            _out +='------------'
            console.log(
                chalk.yellowBright(
                    _out
                )
            )
        }else {
            let _out = `---------------------\n`;
            _out += ` ${moment().format('DD/MM/YYYY/hh/mm/ss')}\n`;
            _out +='---------------------';
            console.log(
                chalk.magentaBright(
                    _out
                )
            );
        }
    });

program.parse(process.argv)