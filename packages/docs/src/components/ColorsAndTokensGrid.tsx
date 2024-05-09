import { colors } from '@ignite-ui/tokens';
import { getContrast } from 'polished';
import '../styles/tokens-grid.css';

export function ColorsGrid() {
    return Object.entries(colors).map(([ key, color ]) => {
        return (
            <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF' }}>
                    <strong>${key}</strong>
                    <span>{color}</span>
                </div>
            </div>
        )
    })
}

interface TokensGridProps {
    tokens: Record<string, string>
    hasRemValue?: boolean;
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table className='tokens-grid'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Value</th>
                {hasRemValue && <th>Pixels</th>}
            </tr>
        </thead>

        <tbody>
          {Object.entries(tokens).map(([key, value]) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
                {hasRemValue && (
                  <td>{Number(value.replace('rem', '')) * 16}</td>
                )}
              </tr>
            )
          })}
        </tbody>
    </table>
  )
}