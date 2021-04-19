import { compareAsc, format } from 'date-fns'

export default function dateValidate (data: string) {
  const valid = compareAsc(Number(format(new Date(data), 'yyyyMMdd')), Number(format(new Date(), 'yyyyMMdd')))

  return valid === 1 || valid === 0 ? 'incomplete' : 'unsuccessful'
}
