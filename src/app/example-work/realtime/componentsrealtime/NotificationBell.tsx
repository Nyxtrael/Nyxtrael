'use client';
export default function NotificationBell() {
  const ask = async () => {
    if (!('Notification' in window)) return alert('Notifications not supported');
    if (Notification.permission === 'granted') return alert('Notifications already enabled.');
    const perm = await Notification.requestPermission();
    if (perm !== 'granted') alert('Notifications blocked.');
  };
  return (
    <button onClick={ask} className="px-3 py-1.5 rounded-md ring-1 ring-white/10 text-sm hover:bg-neutral-mid">
      Enable notifications 🔔
    </button>
  );
}
