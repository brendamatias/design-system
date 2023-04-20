const SECONDS_PER_YEAR = 31536000
const SECONDS_PER_MONTH = 2592000
const SECONDS_PER_DAY = 86400
const SECONDS_PER_HOUR = 3600
const SECONDS_PER_MINUTE = 60

type DateLabel = 'ano' | 'mês' | 'dia' | 'hora' | 'minuto'

export const formatCurrency = (value: number = 0) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return formatter.format(value)
}

const formatPluralizeDate = (label: DateLabel, interval: number) => {
  const pluralize = {
    ano: 'anos',
    mês: 'meses',
    dia: 'dias',
    hora: 'horas',
    minuto: 'minutes',
  }

  return `${interval > 1 ? pluralize[label] : label}`
}

const strToTimeAgo = (label: DateLabel, interval: number) => {
  const intervalFormatted = Math.floor(interval)

  return `${intervalFormatted} ${formatPluralizeDate(
    label,
    intervalFormatted,
  )} atrás`
}

export const formatTimeAgo = (date: Date) => {
  const seconds = Math.floor((new Date() - date) / 1000)
  let interval = seconds / SECONDS_PER_YEAR

  if (interval > 1) return strToTimeAgo('ano', interval)

  interval = seconds / SECONDS_PER_MONTH

  if (interval > 1) return strToTimeAgo('mês', interval)

  interval = seconds / SECONDS_PER_DAY

  if (interval > 1) return strToTimeAgo('dia', interval)

  interval = seconds / SECONDS_PER_HOUR

  if (interval > 1) return strToTimeAgo('hora', interval)

  interval = seconds / SECONDS_PER_MINUTE

  if (interval > 1) return strToTimeAgo('minuto', interval)

  return 'Agora mesmo'
}
