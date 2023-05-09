export const generateUtilities = (start, end, unit = 'px') => {
  const result = {}
  for (let i = start; i <= end; i++) {
    result[`${i}${unit}`] = `${i}${unit}`
  }
  return result
}
