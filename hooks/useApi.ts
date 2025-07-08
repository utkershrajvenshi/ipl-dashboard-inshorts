import { useQuery } from '@tanstack/react-query'

export const useFixtures = () => {
  return useQuery({
    queryKey: ['fixtures'],
    queryFn: async () => {
      const response = await fetch('/api/fixtures')
      if (!response.ok) {
        throw new Error('Failed to fetch fixtures')
      }
      return response.json()
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2
  })
}

export const useStandings = () => {
  return useQuery({
    queryKey: ['standings'],
    queryFn: async () => {
      const response = await fetch('/api/standings')
      if (!response.ok) {
        throw new Error('Failed to fetch standings')
      }
      return response.json()
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
    retry: 2
  })
}

export const useLiveMatches = () => {
  return useQuery({
    queryKey: ['live-matches'],
    queryFn: async () => {
      const response = await fetch('/api/matches')
      if (!response.ok) {
        throw new Error('Failed to fetch live matches')
      }
      return response.json()
    },
    staleTime: 1000 * 30, // 30 seconds
    retry: 2,
    refetchInterval: 1000 * 30 // 30 seconds
  })
}
