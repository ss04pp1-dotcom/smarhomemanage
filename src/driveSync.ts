import { getAccessToken } from './auth';

const FILE_NAME = 'health_expenses_db.json';

export interface AppData {
  expenses: any[];
  budgets: any[];
  lastUpdated: string;
}

export const saveToDrive = async (data: AppData): Promise<boolean> => {
  const token = await getAccessToken();
  if (!token) throw new Error('No access token available');

  try {
    // 1. Check if file already exists
    const searchRes = await fetch(`https://www.googleapis.com/drive/v3/files?q=name='${FILE_NAME}' and trashed=false&spaces=drive`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const searchData = await searchRes.json();
    let fileId = searchData.files && searchData.files.length > 0 ? searchData.files[0].id : null;

    const metadata = {
      name: FILE_NAME,
      mimeType: 'application/json'
    };

    const fileContent = JSON.stringify(data);
    const form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    form.append('file', new Blob([fileContent], { type: 'application/json' }));

    let url = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';
    let method = 'POST';

    if (fileId) {
      url = `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=multipart`;
      method = 'PATCH';
    }

    const res = await fetch(url, {
      method,
      headers: { Authorization: `Bearer ${token}` },
      body: form
    });

    return res.ok;
  } catch (err) {
    console.error('Failed to save to Drive', err);
    return false;
  }
};

export const loadFromDrive = async (): Promise<AppData | null> => {
  const token = await getAccessToken();
  if (!token) throw new Error('No access token available');

  try {
    const searchRes = await fetch(`https://www.googleapis.com/drive/v3/files?q=name='${FILE_NAME}' and trashed=false&spaces=drive`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const searchData = await searchRes.json();
    if (!searchData.files || searchData.files.length === 0) return null;

    const fileId = searchData.files[0].id;
    const res = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error('Failed to load from Drive', err);
    return null;
  }
};
