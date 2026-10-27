const regionalData = [
  {
    region: '서울·경기·인천',
    shortRegion: '수도권',
    businesses: 11188,
    fiveDay: 86.8,
    alternate: 0.7,
    notImplemented: 12.5,
  },
  {
    region: '충청·강원도',
    shortRegion: '충청·강원',
    businesses: 1328,
    fiveDay: 81.0,
    alternate: 0,
    notImplemented: 19.0,
  },
  {
    region: '전라·제주도',
    shortRegion: '전라·제주',
    businesses: 1118,
    fiveDay: 90.6,
    alternate: 1.8,
    notImplemented: 7.6,
  },
  {
    region: '경상도',
    shortRegion: '경상',
    businesses: 1892,
    fiveDay: 86.7,
    alternate: 0.8,
    notImplemented: 12.5,
  },
]

const formatNumber = new Intl.NumberFormat('ko-KR')

function App() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] px-5 py-8 text-[#18201d] sm:px-8 sm:py-12 lg:px-12">
      <section className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col justify-between gap-6 lg:mb-10 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-[#d9ff57] px-3 py-1 text-xs font-bold tracking-[0.08em] text-[#18201d]">
                2025 실태조사
              </span>
              <span className="text-sm text-[#65706b]">단위: %, 개</span>
            </div>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-[-0.04em] sm:text-5xl">
              지역별 주 5일 근무
              <br />
              시행 현황
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#65706b] sm:text-base">
              디자이너 고용 사업체 15,526개를 지역별로 비교했습니다.
              각 막대는 근무제 시행 비율의 합계 100%를 나타냅니다.
            </p>
          </div>

          <div className="flex gap-3">
            <div className="min-w-32 rounded-2xl border border-[#d7d7ce] bg-white/65 px-4 py-3">
              <p className="text-xs font-medium text-[#74807a]">전체 시행률</p>
              <p className="mt-1 text-2xl font-extrabold tracking-tight">86.6%</p>
            </div>
            <div className="min-w-32 rounded-2xl bg-[#18201d] px-4 py-3 text-white">
              <p className="text-xs font-medium text-white/60">전체 사업체</p>
              <p className="mt-1 text-2xl font-extrabold tracking-tight">15,526</p>
            </div>
          </div>
        </header>

        <div className="overflow-hidden rounded-[28px] border border-[#deddd5] bg-[#fffef9] shadow-[0_20px_60px_rgba(35,41,37,0.08)]">
          <div className="flex flex-col justify-between gap-5 border-b border-[#e5e3dc] px-5 py-5 sm:flex-row sm:items-center sm:px-8">
            <div>
              <h2 className="text-lg font-bold tracking-[-0.02em]">지역별 근무제 구성</h2>
              <p className="mt-1 text-xs text-[#7c857f]">막대 위에 마우스를 올리면 항목별 비율을 확인할 수 있습니다.</p>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-[#525d57]">
              <span className="flex items-center gap-2">
                <i className="h-2.5 w-2.5 rounded-full bg-[#1d5b48]" />주 5일
              </span>
              <span className="flex items-center gap-2">
                <i className="h-2.5 w-2.5 rounded-full bg-[#d9ff57]" />격주 근무
              </span>
              <span className="flex items-center gap-2">
                <i className="h-2.5 w-2.5 rounded-full bg-[#ddd9d0]" />미시행
              </span>
            </div>
          </div>

          <div className="px-5 py-7 sm:px-8 sm:py-9">
            <div className="space-y-8">
              {regionalData.map((item) => (
                <article
                  key={item.region}
                  className="grid gap-3 sm:grid-cols-[148px_1fr] sm:items-center sm:gap-6"
                >
                  <div>
                    <h3 className="font-bold tracking-[-0.02em]">{item.region}</h3>
                    <p className="mt-1 text-xs tabular-nums text-[#818a84]">
                      {formatNumber.format(item.businesses)}개 사업체
                    </p>
                  </div>
                  <div>
                    <div
                      className="flex h-12 w-full overflow-hidden rounded-xl bg-[#ebe9e2]"
                      aria-label={`${item.region}: 주 5일 ${item.fiveDay}%, 격주 근무 ${item.alternate}%, 미시행 ${item.notImplemented}%`}
                    >
                      <div
                        className="group relative flex items-center justify-end bg-[#1d5b48] pr-3 text-sm font-bold tabular-nums text-white transition-[filter] hover:brightness-110"
                        style={{ width: `${item.fiveDay}%` }}
                        title={`주 5일 ${item.fiveDay.toFixed(1)}%`}
                      >
                        {item.fiveDay.toFixed(1)}%
                      </div>
                      {item.alternate > 0 && (
                        <div
                          className="bg-[#d9ff57] transition-[filter] hover:brightness-95"
                          style={{ width: `${item.alternate}%` }}
                          title={`격주 근무 ${item.alternate.toFixed(1)}%`}
                        />
                      )}
                      <div
                        className="bg-[#ddd9d0] transition-[filter] hover:brightness-95"
                        style={{ width: `${item.notImplemented}%` }}
                        title={`미시행 ${item.notImplemented.toFixed(1)}%`}
                      />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[11px] font-medium tabular-nums text-[#7b847e]">
                      <span>격주 {item.alternate.toFixed(1)}%</span>
                      <span>미시행 {item.notImplemented.toFixed(1)}%</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <footer className="grid border-t border-[#e5e3dc] bg-[#f8f7f1] sm:grid-cols-2">
            <div className="border-b border-[#e5e3dc] p-5 sm:border-r sm:border-b-0 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#65706b]">가장 높은 지역</p>
              <div className="mt-2 flex items-baseline justify-between gap-4">
                <p className="text-xl font-extrabold tracking-tight">전라·제주도</p>
                <p className="text-3xl font-black tracking-[-0.04em] text-[#1d5b48]">90.6%</p>
              </div>
            </div>
            <div className="p-5 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#65706b]">지역 간 최대 격차</p>
              <div className="mt-2 flex items-baseline justify-between gap-4">
                <p className="text-sm leading-5 text-[#59635e]">전라·제주 ↔ 충청·강원</p>
                <p className="text-3xl font-black tracking-[-0.04em]">9.6%p</p>
              </div>
            </div>
          </footer>
        </div>

        <p className="mt-4 text-right text-[11px] text-[#89918c]">
          출처: 디자이너등급별노임단가실태조사 · 주 5일 근무 시행 여부 (2025)
        </p>
      </section>
    </main>
  )
}

export default App
