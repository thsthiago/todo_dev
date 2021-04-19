import { compareDesc } from 'date-fns'

export default function dateValidate (data: string) {
  const valid = compareDesc(new Date(), new Date(data))

  return valid === 1 ? 'incomplete' : 'unsuccessful'
}
