export function minNumberOfHours(initialEnergy: number, initialExperience: number, energy: number[], experience: number[]): number {
  const n = energy.length
  let trainingHours = 0

  for (let i = 0; i < n; i++) {
    const eng = energy[i]
    if (initialEnergy <= eng) {
      trainingHours += eng + 1 - initialEnergy
      initialEnergy = eng + 1
    }
    initialEnergy -= eng
    const exp = experience[i]
    if (initialExperience <= exp) {
      trainingHours += exp + 1 - initialExperience
      initialExperience = exp + 1
    }
    initialExperience += exp
  }

  return trainingHours
}
