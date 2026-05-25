'use client';

import { useDeferredValue, useMemo, useState } from 'react';
import { useField, FieldLabel } from '@payloadcms/ui';
import { icons as lucideIcons } from 'lucide-react';
import { lucideIconOptions } from '@/utilities/lucideIcons';
import type { ReactElement, FC, ChangeEvent } from 'react';
import type { TextFieldClientComponent } from 'payload';
import type { LucideIconOption } from '@/utilities/lucideIcons';
import styles from '@/fields/IconPickerField/IconFieldPicker.module.css';

const MAX_RESULTS = 120;

type IconName = keyof typeof lucideIcons;

const getIcon = (value: string | null | undefined) => {
  if (value == null) return null;

  const Icon = lucideIcons[value as IconName];

  return Icon ?? null;
};

export const IconPickerField: TextFieldClientComponent = ({ field, path }): ReactElement<FC> => {
  const { value, setValue } = useField<string>({ path: path ?? field.name });
  const [query, setQuery] = useState<string>('');
  const deferredQuery = useDeferredValue<string>(query);
  const filtered = useMemo((): Array<LucideIconOption> => {
    const query: string | undefined = deferredQuery.trim().toLowerCase();

    if (query.length === 0) return lucideIconOptions.slice(0, MAX_RESULTS);

    return lucideIconOptions
      .filter(
        ({ name, value }: LucideIconOption): boolean =>
          value.includes(query) || name.toLowerCase().includes(query),
      )
      .slice(0, MAX_RESULTS);
  }, [deferredQuery]);

  const SelectedIcon = getIcon(value);

  return (
    <div className={`field-type ${styles.wrapper}`}>
      <FieldLabel
        label={typeof field.label === 'string' ? field.label : field.name}
        required={field.required}
      />

      <div className={styles.selectedRow}>
        <div className={styles.selectedPreview}>
          {SelectedIcon ? <SelectedIcon size={20} /> : <span className={styles.placeholder}>—</span>}
        </div>
        <code className={styles.selectedValue}>{value || 'No icon selected'}</code>
        {value && (
          <button
            type="button"
            className={styles.clearBtn}
            onClick={(): void => setValue(null)}
          >
            Clear
          </button>
        )}
      </div>

      <input
        type="search"
        className={styles.search}
        placeholder="Search icons…"
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => setQuery(e.target.value)}
        autoComplete="off"
        spellCheck={false}
      />

      <div className={styles.grid} role="listbox" aria-label="Lucide icons">
        {filtered.map(({ name, value: val }: LucideIconOption): ReactElement<FC> => {
          const Icon = lucideIcons[val as IconName];

          if (!Icon) return null;

          const selected = value === val;

          return (
            <button
              key={val}
              type="button"
              role="option"
              aria-selected={selected}
              title={`${name} (${val})`}
              className={`${styles.cell} ${selected ? styles.cellSelected : ''}`}
              onClick={() => setValue(val)}
            >
              <Icon size={20} aria-hidden />
            </button>
          );
        })}
      </div>

      <div className={styles.meta}>
        {filtered.length === 0
          ? 'No matches'
          : filtered.length === MAX_RESULTS
            ? `Showing first ${MAX_RESULTS} matches — refine your search.`
            : `${filtered.length} match${filtered.length === 1 ? '' : 'es'}`}
      </div>
    </div>
  );
};

